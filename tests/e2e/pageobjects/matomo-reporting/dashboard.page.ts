/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

import { $, $$, browser } from '@wdio/globals';
import MatomoReportingPage from '../matomo-reporting.page.js';

class DashboardPage extends MatomoReportingPage {
  async open() {
    const result = await super.open('Dashboard_Dashboard.1');

    await $('#dashboardWidgetsArea .widgetContent div').waitForDisplayed();
    await browser.waitUntil(async () => {
      const widgetsCount = (await $$('#dashboardWidgetsArea .widget')).length;
      const loadedWidgetCount = (await $$('#dashboardWidgetsArea .widgetContent > *:first-child:not(.widgetLoading)')).length;

      return loadedWidgetCount >= widgetsCount;
    }, { timeout: 20000 });
    await browser.waitUntil(async () => {
      return await $('.UserCountryMap_map.kartograph').isDisplayed();
    }, { timeout: 20000 });
    await browser.execute(function () {
      $('.widget ul.rss').hide();
    });
    await this.addStylesToPage('#visitsLive .realTimeWidget_datetime { display: none !important; }');
    await this.waitForImages();

    return result;
  }
}

export default new DashboardPage();
