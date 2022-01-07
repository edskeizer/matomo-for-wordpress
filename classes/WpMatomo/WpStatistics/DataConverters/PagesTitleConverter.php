<?php

namespace WpMatomo\WpStatistics\DataConverters;

/**
 * @package WpMatomo
 * @subpackage WpStatisticsImport
 */
class PagesTitleConverter extends NumberConverter implements DataConverterInterface {

	public static function convert( array $wp_statistics_data ) {
		return self::aggregate_by_key( $wp_statistics_data, 'title' );
	}
}
