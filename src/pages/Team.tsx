import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import TeamCard from '@/components/TeamCard'
import { team } from '@/data/team'

export default function Team() {
  const canonical = 'https://www.adcedo.in/team'
  return (
    <>
      <Seo title="Team — The People Behind ADCEDO" canonical={canonical} description="Meet the team driving ADCEDO's campaigns and collaborations." />
      <PageHeader title="Meet Our Team" canonical={canonical} breadcrumb={[{ name: 'Home', url: 'https://www.adcedo.in/' }, { name: 'Team', url: canonical }]} />
      <Section>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {team.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </Section>
    </>
  )
}
