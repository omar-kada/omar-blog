'use client'
import { Icon, IconTags } from '@/components/icons'
import { Section } from '@/components/Section'
import { lighterText, lightText, xsAuto } from '@/css/constants'
import { Experience, Introduction, PersonalProjects, Education } from '.'

export function Resume() {
  return (
    <div className=" px-10 py-10">
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        <div
          className={
            xsAuto +
            'xs:flex-col m-1 mb-4 flex flex-wrap items-end justify-between gap-4 md:col-span-3 md:flex-row'
          }
        >
          <Introduction />
        </div>
        <div
          className={
            xsAuto +
            'w-gull m-1 mb-4 flex items-center justify-center gap-4 sm:col-span-1 md:col-span-3'
          }
        >
          <div className={lighterText + 'text-xl'}> • Never Stop Learning •</div>
        </div>
        {/* Skills */}
        <div
          className={xsAuto + 'col-span-1 m-1 flex flex-col space-y-2 md:col-start-3 md:row-span-1'}
        >
          <Section title="Main Stack" border={false}>
            <div>
              <IconTags tags={['Java', 'Spring', 'Typescript', 'Angular']} autoGlows />
            </div>
          </Section>

          <Section title="Tech" border={false}>
            <div>
              <IconTags
                tags={[
                  'SQL',
                  'Hibernate',
                  'Git',
                  'GitlabCI',
                  'Docker',
                  'Sonar',
                  'GraphQL',
                  'REST',
                  'HTML',
                  'CSS',
                ]}
              />
            </div>
          </Section>
        </div>

        <div className={xsAuto + 'md:col-start-0 md:col-span-2 md:row-span-3 md:row-start-3'}>
          <Experience />
        </div>

        <div className={xsAuto + ' md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-5'}>
          <PersonalProjects />
        </div>
        <div className={xsAuto + 'md:col-start-0 md:col-span-2 md:row-start-6'}>
          <Education />
        </div>
        <div
          className={
            xsAuto +
            'col-span-1 m-1 flex justify-between gap-2 md:col-start-3 md:row-span-1 md:row-start-4 md:flex-col'
          }
        >
          <Section title="Languages" border={false}>
            <div>
              <IconTags tags={['Englsih', 'French', 'Arabic']} />
            </div>
          </Section>

          <Section title="Hobbies" border={false}>
            <div>
              <IconTags tags={['Football', 'Gaming', 'Travel']} />
            </div>
          </Section>
        </div>
      </div>
      <div className={lightText + 'mt-8 flex items-center justify-center text-sm '}>
        Made with &nbsp; <Icon kind="HTML" size={4}></Icon>
        <Icon kind="CSS" size={4}></Icon> <Icon kind="Tailwind" size={4}></Icon>
      </div>
    </div>
  )
}
