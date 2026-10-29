<?php
if (!defined('ABSPATH')) exit;

function code17_enqueue_theme_assets() {
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    // Dynamically find Vite generated CSS and JS
    $css_files = glob($theme_dir . '/assets/*.css');
    $js_files = glob($theme_dir . '/assets/*.js');

    if (!empty($css_files)) {
        $css_filename = basename($css_files[0]);
        wp_enqueue_style('code17-app-css', $theme_uri . '/assets/' . $css_filename, array(), '1.0.0');
    }

    if (!empty($js_files)) {
        $js_filename = basename($js_files[0]);
        wp_enqueue_script('code17-app-js', $theme_uri . '/assets/' . $js_filename, array(), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'code17_enqueue_theme_assets');

// Ensure the bundle script is loaded as ES Module
function code17_add_module_attribute($tag, $handle, $src) {
    if ('code17-app-js' === $handle) {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
add_filter('script_loader_tag', 'code17_add_module_attribute', 10, 3);

// Support title tag
add_theme_support('title-tag');
