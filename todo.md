Fix the meta tags and SEO issues for: https://pluginstream.pages.dev
Current OG score: 57/100

## Issues found

- [WARNING] Missing image dimensions
  Specifying og:image:width and og:image:height helps platforms render your image correctly without delay.
  Suggested fix:
  <meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

- [WARNING] OG Image size (0.55 MB) too large for: WhatsApp
  WhatsApp requires OG images under 500 KB to display previews. Compress or resize your image. Recommended size: < 500 KB.

- [WARNING] Missing canonical URL
  A canonical URL helps prevent duplicate content issues with search engines. Essential for pages accessible via multiple URLs.
  Suggested fix:
  <link rel="canonical" href="https://pluginstream.pages.dev" />

- [WARNING] Missing apple-touch-icon
  The apple-touch-icon is used when users add your site to their iOS home screen. Without it, iOS takes a screenshot instead, which looks unprofessional.
  Suggested fix:
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

- [TIP] Image is 1536x1024px
  Recommended size is 1200x630px for optimal display across all platforms.

- [TIP] Missing og:image:alt
  Adding alt text to your OG image improves accessibility and SEO.
  Suggested fix:
  <meta property="og:image:alt" content="Description of the image" />

- [TIP] Missing og:site_name
  The og:site_name helps platforms identify your brand.
  Suggested fix:
  <meta property="og:site_name" content="Your Site Name" />

- [TIP] Missing og:locale
  The og:locale tag declares the language and region for your content (e.g. en_US, es_ES). This helps platforms display your page to the right audience.
  Suggested fix:
  <meta property="og:locale" content="en_US" />

- [TIP] Twitter card is "summary" but image exists
  You have an image but are using "summary" card type. Use "summary_large_image" to display a larger image preview on X/Twitter, which gets more engagement.
  Suggested fix:
  <meta name="twitter:card" content="summary_large_image" />

- [TIP] Missing twitter:site
  Adding your X/Twitter @username helps attribute content to your account and improves brand visibility.
  Suggested fix:
  <meta name="twitter:site" content="@yourusername" />

- [TIP] Meta description is long (203 chars)
  Google typically shows 150-160 characters in search results. Content beyond that will be cut off.

- [TIP] No structured data (JSON-LD) found
  Structured data helps search engines understand your content and can enable rich results (star ratings, FAQs, breadcrumbs, etc.) in search results.
  Suggested fix:
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Your Page Title",
  "description": "Your description"
}
</script>

- [TIP] Missing theme-color meta tag
  The theme-color meta tag customizes the browser toolbar color on mobile devices, improving the branded experience.
  Suggested fix:
  <meta name="theme-color" content="#4285f4" />

- [TIP] Missing 32x32 favicon
  A 32x32 PNG favicon provides crisp icons in browser tabs. Consider also providing an SVG favicon for scalability.
  Suggested fix:
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

- [TIP] No SVG favicon found
  SVG favicons scale perfectly at any size and support dark mode via CSS media queries. Modern browsers support them natively.
  Suggested fix:
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

- [TIP] Missing web app manifest
  A web app manifest (manifest.json) enables "Add to Home Screen" on Android, defines your app name, icons, and theme. Essential for PWA support.
  Suggested fix:
  <link rel="manifest" href="/site.webmanifest" />

## Current meta tags

```html
<title>PluginStream - Free Premium Movies & OTT Plugins | Download APK</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="PluginStream is a free, ad-free streaming app for Android. Stream Netflix, Prime, HBO, Disney+ and YouTube without ads. Download the APK now for unlimited entertainment in Pakistan, India, and worldwide." />
<!-- html lang="en" -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://pluginstream.pages.dev/" />
<meta property="og:title" content="PluginStream - Free Premium Movies & OTT Streaming" />
<meta property="og:description" content="Stream Netflix, Prime Video, HBO, Disney+ and YouTube without ads. Free, open-source Android streaming app with 100+ OTT plugins." />
<meta property="og:image" content="https://pluginstream.pages.dev/graph.png" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:url" content="https://pluginstream.pages.dev/" />
<meta name="twitter:title" content="PluginStream - Free Premium Movies & OTT Streaming" />
<meta name="twitter:description" content="Stream Netflix, Prime Video, HBO, Disney+ and YouTube without ads. Free open-source Android streaming app." />
<meta name="twitter:image" content="https://pluginstream.pages.dev/graph.png" />
```

## Performance
- Response time: 70ms
- HTML size: 61 KB

## Task

Provide the corrected and complete set of meta tags for the <head> of this page that fixes all the issues above. Include HTML, Open Graph, and Twitter Card tags. If there are performance issues, suggest specific improvements.