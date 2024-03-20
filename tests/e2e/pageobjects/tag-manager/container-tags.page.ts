/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

import { $ } from '@wdio/globals';
import TagManagerPage from './page.js';
import GlobalSetup from '../../global-setup.js';

class ContainerTagsPage extends TagManagerPage {
  async open() {
    const result = await super.open('TagManager.manageTags', {
      idContainer: GlobalSetup.testIdContainer,
    });

    await $('.tagManagerTagList td.description').waitForDisplayed();
    await $('.chip').waitForDisplayed();
    await browser.pause(500);

    await this.normalizeContainerSelector();

    await browser.execute(() => {
      $('td.lastUpdated').each((i, e) => $(e).html('REMOVED'));
    });

    await browser.pause(1000);

    return result;
  }
}

export default new ContainerTagsPage();
