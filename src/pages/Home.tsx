import Seo from '@/components/Seo'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import TeamCard from '@/components/TeamCard'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { team } from '@/data/team'

export default function Home() {
  const canonical = 'https://www.adcedo.in/'
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ADCEDO',
    url: canonical,
    logo: '/logo512.png',
    sameAs: ['https://instagram.com/ad_cedo'],
  }

  return (
    <>
      <Seo
        title="ADCEDO — Creative Agency for Content, Branding & Growth"
        description="ADCEDO is a creative marketing agency delivering branding, web, and content that drives real growth."
        canonical={canonical}
        ogImage="/og-cover.jpg"
        type="website"
      >
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: canonical,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${canonical}?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        })}</script>
      </Seo>

      <section className="bg-primary border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 items-center gap-12 py-20 md:py-28">
            {/* Left copy */}
            <div className="text-light max-w-2xl">
              <h1 className="font-heading font-bold uppercase tracking-tight text-5xl md:text-8xl mb-6">
                ADCEDO
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-light">
                ADCEDO is where ideas flourish, and partnerships thrive.
                We bring brands and influencers together, crafting meaningful collaborations
                that leave a lasting impact. It is a full-service marketing agency dedicated to
                driving brand success through innovative strategies and impactful campaigns.
                We specialize in delivering measurable results across various Social Media Platforms.
                We empower creators to shine and brands to connect authentically with their audience.
                With a focus on innovation, growth, and results, ADCEDO is your trusted partner in
                building impactful stories and elevating your digital presence. Let's redefine success together.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded px-8 py-4 text-base font-semibold uppercase tracking-wide bg-white text-primary hover:bg-dark hover:text-primary transition"
              >
                Reach Out
              </a>
            </div>

            {/* Right image */}
            <div className="relative flex justify-end">
              <img
                src="/img/mascot.png"
                alt="ADCEDO Mascot"
                loading="eager"
                className="w-full max-w-lg md:max-w-2xl object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>



      <Section id="why" eyebrow="Why US" title="Welcome to ADCEDO, where creativity meets collaboration">
        <p className="text-slate-700 max-w-3xl">
          We specialize in bridging the gap between brands and influencers, creating powerful partnerships that resonate with
          audiences.
        </p>
        <a className="mt-6 inline-block underline" href="/about#why">Read More</a>
      </Section>

      <Section title="Our Creative Services">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>

      <Section title="See Us in Action">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section title="Meet Our Team">
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </Section>
    </>
  )
}
