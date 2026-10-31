import * as React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Seo = ({ title, description, pathname, children }) => {

  const { title: siteTitle, description: siteDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title ? `${title} | ${siteTitle}` : `${siteTitle} · Software Engineer`,
    description: description || siteDescription,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}/android-chrome-512x512.png`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="theme-color" content="#2563eb" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      {children}
    </>
  )
}

export default Seo
