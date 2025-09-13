import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import { site } from '@/data/site'

export default function Contact() {
  const canonical = 'https://www.adcedo.in/contact'
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    alert(`Thanks ${fd.get('name')}! We'll get back to you at ${fd.get('email')}.`)
  }
  return (
    <>
      <Seo title="Contact ADCEDO — Let’s Build Something" canonical={canonical} description="Reach out to ADCEDO to discuss campaigns, collaborations, or partnerships." />
      <PageHeader title="Contact" canonical={canonical} breadcrumb={[{ name: 'Home', url: 'https://www.adcedo.in/' }, { name: 'Contact', url: canonical }]} />
      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <form onSubmit={onSubmit} className="space-y-4" aria-label="Send Message">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input required name="name" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input required type="email" name="email" className="mt-1 w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea required name="message" className="mt-1 w-full border rounded px-3 py-2 h-32"></textarea>
          </div>
          <button className="px-4 py-2 border rounded">Send</button>
        </form>
        <aside>
          <h3 className="font-semibold mb-2">Get In Touch</h3>
          <address className="not-italic text-sm">
            {site.address}<br />{site.phonePrimary}<br />{site.phoneSecondary}<br />
            <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </aside>
      </section>
    </>
  )
}
