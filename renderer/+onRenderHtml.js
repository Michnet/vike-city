// https://vike.dev/onRenderHtml
export { onRenderHtml }

import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { PageLayout } from './PageLayout'

async function onRenderHtml(pageContext) {
  const { Page } = pageContext;
  const pageHtml = PageLayout(Page());
  console.log('page', Page());
  return escapeInject`<!DOCTYPE html>
    <html l>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
      <title>StickyMobile BootStrap</title>
      <link rel="stylesheet" type="text/css" href="styles/bootstrap.css">
      <link rel="stylesheet" type="text/css" href="styles/style.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="fonts/css/fontawesome-all.min.css">
      <link rel="manifest" href="_manifest.json" data-pwa-version="set_in_manifest_and_pwa_js">
      <link rel="apple-touch-icon" sizes="180x180" href="app/icons/icon-192x192.png">
    </head>

    <body class="theme-light" data-highlight="highlight-red" data-gradient="body-default">
      <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
      <div id="page">
      <div class="header header-fixed header-logo-center header-auto-show">
          <a href="index.html" class="header-title">Sticky Mobile</a>
          <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
          <a href="#" data-toggle-theme class="header-icon header-icon-4"><i class="fas fa-lightbulb"></i></a>
      </div>

      <div id="footer-bar" class="footer-bar-1">
          <a href="index.html"><i class="fa fa-home"></i><span>Home</span></a>
          <a href="index-components.html"><i class="fa fa-star"></i><span>Features</span></a>
          <a href="index-pages.html" class="active-nav"><i class="fa fa-heart"></i><span>Pages</span></a>
          <a href="index-search.html"><i class="fa fa-search"></i><span>Search</span></a>
          <a href="#" data-menu="menu-settings"><i class="fa fa-cog"></i><span>Settings</span></a>
      </div>

          <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </div>

      
      <script type="text/javascript" src="scripts/bootstrap.min.js"></script>
      <script type="text/javascript" src="scripts/custom.js"></script>
      </body>
    </html>`
}
