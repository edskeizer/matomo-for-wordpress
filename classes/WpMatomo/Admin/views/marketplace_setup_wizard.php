<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 * @package matomo
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<style>
	.matomo-marketplace-wizard {
		width: 100%;
		max-width: 700px;
		background-color: white;
		box-shadow: 0 1px 2px rgba(0,0,0,.3);
		border-radius: 3px;
		padding-top: 48px;
		position: relative;
		margin: 32px auto 0 auto;
	}

	.matomo-marketplace-wizard-header {
		position: absolute;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		top: 0;
		left: 0;
		right: 0;
		height: 48px;
		background-color: #e9e9e9;
	}

	.matomo-marketplace-wizard-logo {
		top: -14px;
		left: calc(50% - 38px);
		position: absolute;
		border-radius: 50%;
		background-color: white;
		width: 72px;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #ccc;
	}

	.matomo-marketplace-wizard-body {
		padding: 24px;
	}

	.matomo-marketplace-wizard-logo img {
		width: 64px;
	}

	.matomo-marketplace-wizard .wizard-steps-header {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.matomo-marketplace-wizard .wizard-steps-header .step-title {
		text-transform: uppercase;
		flex: 1;
		color: #888;
	}

	.matomo-marketplace-wizard .wizard-steps-header .divider {
		width: 33px;
	}

	.matomo-marketplace-wizard .wizard-steps {
		display: flex;
		flex-direction: row;
		align-items: stretch;
	}

	.matomo-marketplace-wizard .wizard-steps .step {
		flex: 1;
		padding-right: 32px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		padding-bottom: 6px;
	}

	.matomo-marketplace-wizard .wizard-steps .divider {
		width: 1px;
		background-color: #aaa;
		margin: 0 16px;
	}

	.matomo-marketplace-wizard .wizard-footer p{
		font-size: 0.9em;
		margin-top: 24px;
	}
</style>
<div class="matomo-marketplace-wizard" data-current-step="0">
	<div class="matomo-marketplace-wizard-header">
		<div class="matomo-marketplace-wizard-logo">
			<img alt="Matomo Logo" src="<?php echo esc_attr( $matomo_logo_big ); ?>" />
		</div>
	</div>

	<div class="matomo-marketplace-wizard-body">
		<h1><?php esc_html_e( 'Setup the Matomo Marketplace in two easy steps', 'matomo' ); ?></h1>

		<div class="step-progress-bar">
			<div class="step-progress-1"></div>
			<div class="step-progress-2"></div>
		</div>
		<div class="wizard-steps-header">
			<p class="step-title">Step 1</p>
			<div class="divider"></div>
			<p class="step-title">Step 2</p>
		</div>
		<div class="wizard-steps">
			<div class="step">

				<p>Download the <em>Matomo Marketplace for WordPress</em> plugin.</p>

				<a class="button-primary" rel="noreferrer noopener" target="_blank" href="http://builds.matomo.org/matomo-marketplace-for-wordpress-latest.zip">
					Download
				</a>
			</div>

			<div class="divider"></div>

			<div class="step">
				<p>Upload and install the plugin.</p>

				<a class="button-primary" target="_blank" href="plugin-install.php?tab=upload">
					Go to plugins admin →
				</a>
			</div>
		</div>
		<div class="wizard-footer">
			<p><em>Don't want to use the Matomo Marketplace? You can download Matomo plugins directly on <a target="_blank" rel="noreferrer noopener" href="https://plugins.matomo.org/?wp=1">our marketplace</a>, but keep in mind, you won't receive automatic updates unless you use the Matomo Marketplace plugin.</em></p>
		</div>
	</div>
</div>
