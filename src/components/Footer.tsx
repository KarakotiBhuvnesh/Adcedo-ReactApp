import { Link } from 'react-router-dom'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className=" bg-dark text-primary py-16 mt-12 border-t">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 p-6">
        <div>
          <h3 className="font-semibold">{site.name}</h3>
          <p className="text-sm text-slate-600 max-w-xs">{site.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Get In Touch</h4>
          <address className="not-italic text-sm">
            {site.address}<br />
            {site.phonePrimary}<br />{site.phoneSecondary}<br />
            <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/team">Meet The Team</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Stay updated</h4>
          <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input aria-label="Email" type="email" required placeholder="Email" className="border rounded px-3 py-2 flex-1" />
            <button className="px-3 py-2 border rounded" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="border-t text-center text-sm py-4">© {new Date().getFullYear()} {site.name}. All Rights Reserved.</div>
    </footer>
  )
}
