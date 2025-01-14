/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

import { $ } from '@wdio/globals';
import MatomoAdminPage from '../../matomo-admin.page.js';

class CustomDimensionsPage extends MatomoAdminPage {
  async open() {
    const result = await super.open('CustomDimensions.manage');

    await $('.manageCustomDimensions table').waitForDisplayed({ timeout: 20000 });

    return result;
  }
}

export default new CustomDimensionsPage();
