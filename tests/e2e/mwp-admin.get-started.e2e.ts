/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

import { expect, browser } from '@wdio/globals';
import MwpGetStartedPage from './pageobjects/mwp-admin/get-started.page.js';
import Website from './website.js';

describe('MWP Admin > Get Started', () => {
  const trunkSuffix = process.env.WORDPRESS_VERSION === 'trunk' ? '.trunk' : '';

  before(async () => {
    await Website.login();
  });

  it('should load the page correctly', async () => {
    await MwpGetStartedPage.open();

    await MwpGetStartedPage.prepareWpAdminForScreenshot();
    await expect(
      await browser.checkFullPageScreen(`mwp-admin.get-started${trunkSuffix}`)
    ).toEqual(0);
  });
});
