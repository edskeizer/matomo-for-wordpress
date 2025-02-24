<!--
  Matomo - free/libre analytics platform

  @link https://matomo.org
  @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
-->

<template>
  <div class="pluginMeasurableSettings" ref="root">
    <ActivityIndicator :loading="isLoading"/>

    <GroupedSettings
      :group-name="pluginName"
      :settings="measurableSettings"
      :all-setting-values="settingValues"
      @change="settingValues[`${pluginName}.${$event.name}`] = $event.value"
    />

    <p
      v-if="!isLoading && !measurableSettings.length"
      v-html="$sanitize(noMeasurableSettingsAvailableText)"
      class="noMeasurableSettingsAvailable"
    ></p>

    <div class="settingsFormFooter row" v-if="!isLoading && measurableSettings.length">
      <div class="col s12">
        <input
          v-show="!isLoading"
          :disabled="isSaving"
          type="submit"
          class="button-primary"
          :value="translate('WordPress_SaveChanges')"
          @click="saveSettings()"
        />

        <ActivityIndicator :loading="isSaving" loading-message="" style="display:inline-block;" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, DeepReadonly } from 'vue';
import {
  ActivityIndicator,
  AjaxHelper,
  translate,
  MatomoUrl,
} from 'CoreHome';
import {
  GroupedSettings,
  SettingsForSinglePlugin,
  Setting,
} from 'CorePluginsAdmin';

interface PluginMeasurableSettingsData {
  isLoading: boolean;
  isSaving: boolean;
  measurableSettings: DeepReadonly<Setting[]>;
  settingValues: Record<string, unknown>;
}

export default defineComponent({
  props: {
    idSite: {
      type: Number,
      required: true,
    },
    pluginName: {
      type: String,
      required: true,
    },
  },
  components: {
    ActivityIndicator,
    GroupedSettings,
  },
  data(): PluginMeasurableSettingsData {
    return {
      isSaving: false,
      isLoading: true,
      measurableSettings: [],
      settingValues: {},
    };
  },
  created() {
    this.isLoading = true;
    AjaxHelper.fetch<SettingsForSinglePlugin[]>({
      method: 'SitesManager.getSiteSettings',
      idSite: this.idSite,
    }).then((settings) => {
      const settingsForPlugin = settings
        .find((settingsPerPlugin) => settingsPerPlugin.pluginName === this.pluginName);
      this.measurableSettings = settingsForPlugin?.settings || [];
    }).finally(() => {
      this.isLoading = false;
    });
  },
  mounted() {
    $(this.$refs.root as HTMLElement).on('click', '.matomoAdminLink', (e) => {
      if (window.self !== window.top) {
        e.preventDefault();

        window.parent.postMessage('open-matomo-admin', window.location.origin);
      }
    });
  },
  watch: {
    measurableSettings(settings: Setting[]) {
      if (!settings.length) {
        return;
      }

      const settingValues: Record<string, unknown> = {};
      settings.forEach((setting) => {
        settingValues[`${this.pluginName}.${setting.name}`] = setting.value;
      });
      this.settingValues = settingValues;
    },
  },
  computed: {
    noMeasurableSettingsAvailableText() {
      const link = `index.php?${MatomoUrl.stringify({
        ...MatomoUrl.urlParsed.value,
        module: 'CoreAdminHome',
        action: 'generalSettings',
      })}`;

      return translate(
        'WordPress_NoMeasurableSettingsAvailable',
        `<a href="${link}" class="matomoAdminLink">`,
        '</a>',
      );
    },
  },
  methods: {
    saveSettings() {
      if (this.isSaving) {
        return; // saving already in progress
      }

      const values: Record<string, unknown> = {
        idSite: this.idSite,
        settingValues: {
          [this.pluginName]: [],
        },
      };

      // process setting values
      Object.entries(this.settingValues).forEach(([fullName, fieldValue]) => {
        const [pluginName, name] = fullName.split('.');

        const settingValues = values.settingValues as Record<string, Setting[]>;
        if (!settingValues[pluginName]) {
          settingValues[pluginName] = [];
        }

        let value = fieldValue;
        if (fieldValue === false) {
          value = '0';
        } else if (fieldValue === true) {
          value = '1';
        } else if (Array.isArray(fieldValue)) {
          value = fieldValue.filter((x) => !!x);
        }

        settingValues[pluginName].push({
          name,
          value,
        });
      });

      this.isSaving = true;
      AjaxHelper.post<{ value: string|number }>(
        {
          method: 'SitesManager.updateSite',
        },
        values,
      ).finally(() => {
        this.isSaving = false;
      });
    },
  },
});
</script>
