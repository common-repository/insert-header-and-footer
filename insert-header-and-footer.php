<?php
/**
 * Plugin Name:	Insert Header and Footer
 * Description:	Insert custom codes in header and footer.
 * Version:		1.2
 * Requires at least: 5.2.0
 * Requires PHP: 5.6
 * Author:		dithemes
 * Author URI:	https://dithemes.com
 * Text Domain: insert-header-and-footer
 *
 */

// Exit if directly accessed files.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define constants.

define( 'IHAF_VERSION' , '1.2' );
define( 'IHAF_FILE', __FILE__ );
define( 'IHAF_PATH', wp_normalize_path( plugin_dir_path( IHAF_FILE ) ) );
define( 'IHAF_URL', plugin_dir_url( IHAF_FILE ) );
define( 'IHAF_BASENAME', plugin_basename( IHAF_FILE ) );
define( 'IHAF_DIR_NAME', dirname( IHAF_BASENAME ) );

// Load the init file.
require( IHAF_PATH . 'inc/init.php' );
