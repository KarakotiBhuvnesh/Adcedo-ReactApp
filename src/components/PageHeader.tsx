import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

type Props = { title: string; breadcrumb: { name: string; url: string }[]; canonical: string }
export default function PageHeader({ title, breadcrumb, canonical }: Props) {
  return (
    <header className="bg-slate-50 border-b">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-slate-600">
          {breadcrumb.map((b, i) => (
            <span key={b.url}>
              {i > 0 && <span className="mx-1">/</span>}
              <a href={b.url} className="underline">{b.name}</a>
            </span>
          ))}
        </nav>
      </div>
      <BreadcrumbJsonLd items={breadcrumb} />
      <link rel="canonical" href={canonical} />
    </header>
  )
}
