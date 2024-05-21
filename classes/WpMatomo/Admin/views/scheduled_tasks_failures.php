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

/**
 * @var string[] $matomo_task_failures
 * @var string $matomo_diagnostics_url
 */
?>

<?php foreach ( $matomo_task_failures as $matomo_task_failure_message ) { ?>
<div class="notice notice-error is-dismissible">
	<p>
		<strong><?php esc_html_e( 'Matomo Cron Error', 'matomo' ); ?>:</strong>
		<?php echo esc_html( $matomo_task_failure_message ); ?>
		<a href="<?php echo esc_url( $matomo_diagnostics_url ); ?>">See error details in the Diagnostics page.</a>
	</p>
</div>
<?php } ?>
