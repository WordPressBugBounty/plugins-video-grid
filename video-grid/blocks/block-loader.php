<?php
/**
 * Gutenberg block loader for Video Grid (free).
 * @package VideoGrid
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function rvg_register_video_grid_block() {
	if ( ! function_exists( 'register_block_type' ) ) { return; }
	register_block_type( __DIR__ . '/video-grid' );
}
add_action( 'init', 'rvg_register_video_grid_block' );
