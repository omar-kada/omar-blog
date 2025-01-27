'use client'
import { Icon, IconTags } from '@/components/icons'
import { Section } from '@/components/Section'
import { divideStyle, lighterText, lightText, smAuto } from '@/css/constants'
import { Experience, Introduction, PersonalProjects, Education } from '.'

export function Resume() {
  return (
    <div className="md:px-10 md:py-10">
      <div
        className={'grid gap-4 divide-y sm:grid-cols-1 md:grid-cols-3 md:divide-y-0 ' + divideStyle}
      >
        <div className={smAuto + 'md:col-span-3'}>
          <div
            className={
              'xs:flex-col m-1 mb-4 flex flex-wrap items-end justify-between gap-4  md:flex-row'
            }
          >
            <Introduction />
          </div>
          <div
            className={
              'm-1 mb-4 flex w-full items-center justify-center gap-4 border-y-0 sm:col-span-1 md:col-span-3'
            }
          >
            <div className={lighterText + 'text-xl'}> • Never Stop Learning •</div>
          </div>
        </div>
        {/* Skills */}
        <div
          className={smAuto + 'col-span-1 m-1 flex flex-col space-y-2 md:col-start-3 md:row-span-1'}
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
                  'Liquibase',
                  'HTML',
                  'CSS',
                  'Git',
                  'GitlabCI',
                  'Docker',
                  'Sonar',
                  'GraphQL',
                  'REST',
                ]}
              />
            </div>
          </Section>
        </div>

        <div className={smAuto + 'md:col-start-0 md:col-span-2 md:row-span-3 md:row-start-2'}>
          <Experience />
        </div>

        <div className={smAuto + ' md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-4'}>
          <PersonalProjects />
        </div>
        <div className={smAuto + 'md:col-start-0 md:col-span-2 md:row-start-5'}>
          <Education />
        </div>
        <div
          className={
            smAuto +
            'col-span-1 m-1 flex justify-between gap-2 md:col-start-3 md:row-span-1 md:row-start-3 md:flex-col'
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
