<?php
/**
 * Plugin Name: Elementor File Dropzone
 * Description: Enhances Elementor file inputs with a modern dropzone style.
 * Version: 1.6
 * Author: Rakesh Mandal
 * Author URI: https://rakeshmandal.com
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: elementor-file-dropzone
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Enqueue the plugin's CSS and JS
function rakesh_enqueue_assets() {
    wp_enqueue_style( 'rakesh-style', plugins_url( 'assets/css/style.css', __FILE__ ) );
    wp_enqueue_script( 'rakesh-script', plugins_url( 'assets/js/script.js', __FILE__ ), array('jquery'), null, true );
}
add_action( 'wp_enqueue_scripts', 'rakesh_enqueue_assets' );

// Add a custom class to the file input container
function rakesh_add_custom_class($field, $form_id, $field_id) {
    if ($field['type'] == 'file') {
        $field['input_class'] .= ' rakesh-dropzone';
    }
    return $field;
}
add_filter('elementor_pro/forms/field', 'rakesh_add_custom_class', 10, 3);
