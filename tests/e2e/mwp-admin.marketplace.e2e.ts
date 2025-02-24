/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

import { expect, browser } from '@wdio/globals';
import MwpMarketplacePage from './pageobjects/mwp-admin/marketplace.page.js';
import Website from './website.js';
import GlobalSetup from './global-setup.js';
import SummaryPage from './pageobjects/mwp-admin/summary.page.js';

describe('MWP Admin > Marketplace', () => {
  const trunkSuffix = process.env.WORDPRESS_VERSION === 'trunk' ? '.trunk' : '';

  before(async () => {
    await GlobalSetup.setUp();
    await Website.login();
  });

  after(async () => {
    await SummaryPage.open(); // open matomo page to trigger any pending updates
  });

  it('should load the overview tab correctly', async () => {
    await MwpMarketplacePage.open();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.overview${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should show the marketplace setup wizard when the marketplace plugins is not installed', async () => {
    await browser.refresh();
    await MwpMarketplacePage.openInstallPluginsTab();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.setup-wizard${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should provide functionality that simplifies the process of downloading and installing the plugin', async () => {
    const pathToPlugin = await MwpMarketplacePage.setupWizard.downloadPlugin();
    await MwpMarketplacePage.setupWizard.goToPluginsAdmin();
    await MwpMarketplacePage.setupWizard.uploadPluginAndActivate(pathToPlugin);
    await MwpMarketplacePage.setupWizard.waitForReload();

    await MwpMarketplacePage.removeThirdPartyPlugins();
    await MwpMarketplacePage.removePluginCounts();
    await MwpMarketplacePage.removeVersionStrings();
    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.setup-wizard-finished${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should load the overview tab correctly when the marketplace plugin is installed', async () => {
    await MwpMarketplacePage.open();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.overview-after-install${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should load the install plugins tab correctly', async () => {
    await browser.refresh();
    await MwpMarketplacePage.openInstallPluginsTab();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.install-plugins${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should load the subscriptions tab correctly', async () => {
    await browser.refresh();
    await MwpMarketplacePage.openSubscriptionsTab();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.subscriptions${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should save a subscription license', async () => {
    await browser.refresh();
    await MwpMarketplacePage.setSubscriptionLicense(process.env.TEST_SHOP_LICENSE);
    await MwpMarketplacePage.openSubscriptionsTab();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.license_set${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should show premium plugins in the subscriptions tab after setting a license', async () => {
    await browser.refresh();
    await MwpMarketplacePage.openInstallPluginsTab();

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.install-with-premium${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should install and activate a premium plugin successfully', async () => {
    await browser.refresh();
    await MwpMarketplacePage.installPlugin('SEOWebVitals');
    await MwpMarketplacePage.activateInstalledPlugin();

    expect(await $('tr.active[data-slug="SEOWebVitals"]').isExisting()).toBeTruthy();
  });

  it('should bulk install plugins correctly', async () => {
    await MwpMarketplacePage.open();
    await MwpMarketplacePage.openInstallPluginsTab();

    await $('#cb-select-all-1').click();
    await browser.execute(() => {
      window.jQuery('#bulk-action-selector-top').val('tgmpa-bulk-install');
    });
    await $('.bulkactions #doaction').click();

    await browser.waitUntil(() => {
      return browser.execute(() => window.jQuery('p:contains("All installations have been completed.")').length > 0);
    }, { timeout: 120000 });

    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.plugins-installed${trunkSuffix}`)
    ).toEqual(0);
  });

  it('should bulk activate plugins in correctly', async () => {
    await MwpMarketplacePage.open();
    await MwpMarketplacePage.openInstallPluginsTab();
    await MwpMarketplacePage.showToActivatePlugins();

    await $('#cb-select-all-1').click();
    await browser.execute(() => {
      window.jQuery('#bulk-action-selector-top').val('tgmpa-bulk-activate');
    });
    await $('.bulkactions #doaction').click();

    await $('#message.updated').waitForDisplayed({ timeout: 120000 });

    await MwpMarketplacePage.removeThirdPartyPlugins();
    await MwpMarketplacePage.removePluginCounts();
    await MwpMarketplacePage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.marketplace.plugins-activated${trunkSuffix}`)
    ).toEqual(0);
  });
});
