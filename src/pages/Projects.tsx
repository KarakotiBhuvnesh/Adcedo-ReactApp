import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  const canonical = 'https://www.adcedo.in/projects'
  return (
    <>
      <Seo title="Projects — Case Studies & Client Work | ADCEDO" canonical={canonical} description="See our recent work across lifestyle and D2C brands." />
      <PageHeader title="Projects" canonical={canonical} breadcrumb={[{ name: 'Home', url: 'https://www.adcedo.in/' }, { name: 'Projects', url: canonical }]} />
      <Section title="See Us in Action">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>
    </>
  )
}
