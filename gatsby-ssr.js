import React from "react"
import Layout from "./src/components/layout"

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes }) => {
  setHeadComponents([
    <link
      key="academicons-stylesheet"
      rel="stylesheet"
      href="./src/assets/academicons/css/academicons.min.css"
    />,
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
    />,
    <script
      key="disable-auto-ads"
      dangerouslySetInnerHTML={{
        __html: `(adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;`
      }}
    />,
  ]);
  setHtmlAttributes({ lang: "en" });
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
