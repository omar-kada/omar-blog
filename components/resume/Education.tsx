'use client'
import { Section } from '@/components/Section'
import { lightText } from '@/css/constants'

export function Education() {
  return (
    <>
      <Section title="Education">
        <div className="p-4">
          <h3>Master Software Science and technology </h3>
          <div className={lightText}> - University of Pierre & Marie Curie, Paris, 2017 </div>
        </div>

        <div className="p-4">
          <h3>Software engineering degree </h3>
          <div className={lightText}> - Higher school of computer science, Algiers, 2016</div>
        </div>
      </Section>
    </>
  )
}
