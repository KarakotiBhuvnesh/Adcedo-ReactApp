import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <Seo title="Services — Branding, Web, Content & Campaigns | ADCEDO" description="Explore ADCEDO's services across influencer marketing, brand shoots, social media, and more." />
      <Section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Section>
    </>
  )
}
