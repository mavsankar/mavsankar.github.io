import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center py-32 text-center">
      <p className="font-mono text-sm font-medium text-blue-600 dark:text-blue-400">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-300">Sorry, I couldn't find what you were looking for.</p>
      <Link to="/" className="btn-primary mt-8">Go home</Link>
    </section>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Not found" />
