<?php
/*
Plugin Name: Code 17 Theme Enforcer
Description: Ensures Code 17 React theme is always active and cache is cleared
Version: 1.0
Author: Code 17 Technology LLC
*/

// Force theme filter in WordPress
add_filter('template', function($template) {
    return 'code17-theme';
});
add_filter('stylesheet', function($stylesheet) {
    return 'code17-theme';
});
add_filter('pre_option_template', function($opt) {
    return 'code17-theme';
});
add_filter('pre_option_stylesheet', function($opt) {
    return 'code17-theme';
});

// Update DB on init if needed and clear cache
add_action('init', function() {
    if (get_option('stylesheet') !== 'code17-theme') {
        update_option('template', 'code17-theme');
        update_option('stylesheet', 'code17-theme');
        update_option('current_theme', 'Code 17 Technology');
    }
    if (function_exists('w3tc_flush_all')) {
        w3tc_flush_all();
    }
    if (function_exists('wp_cache_flush')) {
        wp_cache_flush();
    }
});
