import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  type?: 'website' | 'article'
  children?: React.ReactNode
}

export function Seo({ title, description, canonical, ogImage, type = 'website', children }: SEOProps) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {children}
    </Helmet>
  )
}
export default Seo
