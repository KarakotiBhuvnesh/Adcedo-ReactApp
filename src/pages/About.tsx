import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import Section from '@/components/Section'
import React from "react"

export default function About() {
  const canonical = 'https://www.adcedo.in/about'
  return (
    <>
      <Seo title="About ADCEDO — Our Story, Approach & Values" canonical={canonical} description="We elevate brands with cutting-edge strategies, measurable results, and an expert team." />
      <PageHeader title="About" canonical={canonical} breadcrumb={[{ name: 'Home', url: 'https://www.adcedo.in/' }, { name: 'About', url: canonical }]} />
      <Section id="why" title="Why Choose ADCEDO">
        <ul className="list-disc pl-6 space-y-2 text-slate-700 max-w-3xl">
          <li>Innovative Solutions: Unique, impactful campaigns that drive results.</li>
          <li>Client-Centric Approach: Marketing that aligns perfectly with your goals.</li>
          <li>Proven Results: Measurable growth and impactful campaigns.</li>
          <li>Expert Team: Skilled professionals dedicated to your brand's success.</li>
          <li>Future-Focused: Ahead of trends to keep your brand competitive.</li>
        </ul>
      </Section>
    </>
  )
}
