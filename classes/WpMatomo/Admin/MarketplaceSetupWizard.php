<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 * @package matomo
 */

namespace WpMatomo\Admin;

class MarketplaceSetupWizard {
	public function show() {
		$matomo_logo_big = plugins_url( 'assets/img/logo-big.png', MATOMO_ANALYTICS_FILE );

		include dirname( __FILE__ ) . '/views/marketplace_setup_wizard.php';
	}
}
