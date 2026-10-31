import React from "react"
import Layout from "./src/components/layout"

// Sets the theme class before first paint so dark mode doesn't flash.
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (!saved && localStorage.getItem('darkMode') === 'true') saved = 'dark';
    var dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }) => {
  setHeadComponents([
    <link key="fonts-preconnect" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="fonts-preconnect-static" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link
      key="fonts"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
    />,
    <link key="favicon-32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />,
    <link key="favicon-16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />,
    <script
      key="gatsby-gtag-js"
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-YJ0E9LWS5N`}
    />,
    <script
      key="gatsby-gtag-init"
      dangerouslySetInnerHTML={{
        __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-YJ0E9LWS5N', {
           page_path: window.location.pathname,
         });
       `
      }}
    />,
    <script
      key="google-adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6963103368727733"
      crossOrigin="anonymous"
    />
  ]);
  setPreBodyComponents([
    <script key="theme-init" dangerouslySetInnerHTML={{ __html: themeScript }} />,
  ]);
  setHtmlAttributes({ lang: "en" });
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
