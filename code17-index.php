<?php
/**
 * Code 17 Technology LLC - Live Web App Entrypoint
 * Palark.com aesthetic: European precision SRE + SaaS Product Engineering
 */

// Enforce strict anti-caching for SPA entrypoint
header('Cache-Control: no-cache, no-store, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: Thu, 01 Jan 1970 00:00:00 GMT');
header('Permissions-Policy: microphone=*, camera=(), geolocation=()');

$theme_dir = __DIR__ . '/wp-content/themes/code17-theme';
$css_files = glob($theme_dir . '/assets/*.css') ?: [];
$js_files = glob($theme_dir . '/assets/*.js') ?: [];

if (!empty($css_files)) {
    usort($css_files, fn($a, $b) => filemtime($b) - filemtime($a));
}
if (!empty($js_files)) {
    usort($js_files, fn($a, $b) => filemtime($b) - filemtime($a));
}

$build_id = !empty($js_files) ? filemtime($js_files[0]) : time();
$css_url = !empty($css_files) ? '/wp-content/themes/code17-theme/assets/' . basename($css_files[0]) . '?v=' . $build_id : '';
$js_url = !empty($js_files) ? '/wp-content/themes/code17-theme/assets/' . basename($js_files[0]) . '?v=' . $build_id : '';
?>
<!doctype html>
<html lang="en" class="scroll-smooth bg-white text-[#1B1F24]">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code17.Tech | 24/7 SRE & Full-Cycle SaaS Engineering</title>
    <meta name="description" content="Mission-critical 24/7 SRE infrastructure management, Kubernetes orchestration, and high-concurrency SaaS product development by Code17.Tech." />
    <link rel="canonical" href="https://code17.tech" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="apple-touch-icon" href="/code17-icon-512.png" />

    <!-- OpenGraph / Social Media Meta -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Code17.Tech" />
    <meta property="og:url" content="https://code17.tech" />
    <meta property="og:title" content="Code17.Tech | 24/7 SRE & Full-Cycle SaaS Engineering" />
    <meta property="og:description" content="We build the software. We guard the uptime. 24/7 SRE infrastructure operations and high-concurrency SaaS product engineering." />
    <meta property="og:image" content="https://code17.tech/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Card Meta -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Code17.Tech | 24/7 SRE & Full-Cycle SaaS Engineering" />
    <meta property="twitter:description" content="We build the software. We guard the uptime. 24/7 SRE infrastructure operations and high-concurrency SaaS product engineering." />
    <meta property="twitter:image" content="https://code17.tech/og-image.png" />

    <!-- JSON-LD Structured Data for Google / Bing -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://code17.tech/#organization",
          "name": "Code17 Technologies",
          "url": "https://code17.tech",
          "logo": {
            "@type": "ImageObject",
            "url": "https://code17.tech/code17-icon-512.png",
            "width": 512,
            "height": 512
          },
          "email": "contact@code17.tech",
          "sameAs": [
            "https://www.linkedin.com/company/code17-tech"
          ],
          "description": "Dual-discipline technology studio delivering 24/7 mission-critical SRE infrastructure and high-concurrency enterprise SaaS development."
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://code17.tech/#service",
          "name": "Code17 SRE & SaaS Engineering",
          "url": "https://code17.tech",
          "provider": {
            "@id": "https://code17.tech/#organization"
          },
          "areaServed": "Global",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "24/7 SRE & DevOps as a Service"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Full-Cycle Enterprise SaaS Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kubernetes & Multi-Cloud Infrastructure"
                }
              }
            ]
          }
        }
      ]
    }
    </script>

    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%231B1F24'/%3E%3Ccircle cx='38' cy='50' r='18' fill='%2300DDBA'/%3E%3Ctext x='56' y='60' font-family='sans-serif' font-weight='900' font-size='38' fill='%23FFFFFF'%3E17%3C/text%3E%3C/svg%3E" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    <?php if ($css_url): ?>
    <link rel="stylesheet" href="<?php echo htmlspecialchars($css_url); ?>">
    <?php endif; ?>
  </head>
  <body class="bg-white font-sans antialiased text-[#1B1F24] selection:bg-[#7000FF]/15 selection:text-[#7000FF]">
    <div id="root"></div>
    <?php if ($js_url): ?>
    <script type="module" src="<?php echo htmlspecialchars($js_url); ?>"></script>
    <?php endif; ?>

    <!-- Zadarma WebRTC Click-to-Call Widget (SIP #413063) -->
    <div id="myZadarmaCallmeWidget19992" style="position: fixed; bottom: 24px; right: 24px; z-index: 99999;"></div>
    <div id="zadarmaScripts"></div>
    <script>
      (function() {
        var script = document.createElement('script');
        script.src = 'https://my.zadarma.com/callmewidget/v2.0.9/loader.js';
        script.onload = function() {
          if (typeof myZadarmaCallmeWidgetFn19992 === 'function') {
            myZadarmaCallmeWidgetFn19992();
          }
        };
        document.getElementById('zadarmaScripts').appendChild(script);
      }());

      var myZadarmaCallmeWidget19992;
      var myZadarmaCallmeWidgetFn19992 = function() {
        if (typeof ZadarmaCallmeWidget !== 'undefined') {
          myZadarmaCallmeWidget19992 = new ZadarmaCallmeWidget("myZadarmaCallmeWidget19992");
          myZadarmaCallmeWidget19992.create({
            "widgetId": "g1ngnf2g9GUJXFcZKjs8ja7taYY8unyhN2gTaa1r2NccyXaUJggVu1x96tuUUfvh71yg2Y2Es66m4Zy46Sbfmu591csscFYv507d395fc12e33f82b408271f2c537ec",
            "sipId": "413063",
            "domElement": "myZadarmaCallmeWidget19992"
          }, {
            "shape": "circle",
            "language": "en",
            "width": "0",
            "dtmf": false,
            "font": "'Plus Jakarta Sans', sans-serif",
            "color_call": "rgb(255, 255, 255)",
            "color_bg_call": "rgb(0, 221, 186)",
            "color_border_call": "rgb(0, 200, 168)",
            "is_custom_hover": 1,
            "color_call_hover": "rgb(15, 23, 42)",
            "bg_call_hover": "rgb(0, 196, 165)",
            "border_call_hover": "rgb(0, 180, 150)",
            "color_connection": "rgb(255, 255, 255)",
            "color_bg_connection": "rgb(112, 0, 255)",
            "color_border_connection": "rgb(140, 40, 255)",
            "color_calling": "rgb(255, 255, 255)",
            "color_border_calling": "rgb(255, 218, 128)",
            "color_bg_calling": "rgb(255, 181, 0)",
            "color_ended": "rgb(255, 255, 255)",
            "color_bg_ended": "rgb(164, 164, 164)",
            "color_border_ended": "rgb(210, 210, 210)"
          });
        }
      };

      if (window.addEventListener) {
        window.addEventListener('load', myZadarmaCallmeWidgetFn19992, false);
      } else if (window.attachEvent) {
        window.attachEvent('onload', myZadarmaCallmeWidgetFn19992);
      }
    </script>
  </body>
</html>
