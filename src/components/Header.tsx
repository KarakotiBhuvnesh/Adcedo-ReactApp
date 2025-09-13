import { NavLink, Link } from 'react-router-dom'
import { nav } from '@/data/nav'
import { prefetchRoute } from '@/lib/prefetch'

export default function Header() {
  return (

<header className="sticky top-0 z-50 bg-primary backdrop-blur border-b">
  <div className="container mx-auto flex items-center justify-between py-4 px-4">
    <Link
      to="/"
      className="font-extrabold text-white text-4xl sm:text-3xl tracking-wide"
      aria-label="ADCEDO home"
    >
      ADCEDO
    </Link>

    <nav className="hidden md:flex gap-7" aria-label="Main navigation">
      {nav.map((n) => (
        <NavLink
          key={n.to}
          to={n.to}
          onMouseEnter={() => prefetchRoute(n.to)}
          className={({ isActive }) =>
            [
              "px-2 py-2.5 text-base text-white transition-colors rounded-md",
              "hover:text-white focus-visible:outline-none",
              "focus-visible:ring-2 focus-visible:ring-white/70",
              isActive ? "font-semibold" : "",
            ].join(" ")
          }
        >
          {n.label}
        </NavLink>
      ))}
    </nav>

    <details className="md:hidden">
      <summary className="cursor-pointer border border-white/25 rounded px-3 py-2 text-base text-white">
        Menu
      </summary>
      <div className="mt-2 flex flex-col gap-1 bg-primary/95 rounded border border-white/15">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className="px-4 py-3 text-base text-white hover:text-white border-b border-white/15 last:border-0"
          >
            {n.label}
          </NavLink>
        ))}
      </div>
    </details>
  </div>
</header>

  )
}
