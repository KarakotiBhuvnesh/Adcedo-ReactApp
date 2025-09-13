export function BreadcrumbJsonLd(items: { name: string; url: string }[]) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url })),
  }
  return <script type="application/ld+json">{JSON.stringify(data)}</script>
}
export default BreadcrumbJsonLd
