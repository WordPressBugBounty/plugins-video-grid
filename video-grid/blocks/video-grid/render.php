<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
if ( function_exists( 'print_responsive_video_grid_func' ) ) {
	echo print_responsive_video_grid_func( array() ); // phpcs:ignore
} else {
	echo '<!-- Video Grid: render function unavailable -->';
}
