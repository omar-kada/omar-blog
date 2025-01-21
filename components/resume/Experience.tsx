import { Section } from '@/components/Section'
import { lightText, strongText } from '@/css/constants'
import { Icon, IconKind } from '@/components/icons/Icon'
import { ReactNode } from 'react'

export function Experience() {
  return (
    <>
      <Section title="Experience">
        <ExperienceProject
          dates="2021 - Present"
          title="Fullstack software engineer"
          project="Loanscape"
          icon="CreditAgricole"
          company="Crédit Agricole"
          technologies={['Spring', 'Angular', 'Docker', 'Kubernetes', 'GitlabCI']}
        >
          <li>
            Participate in the
            <span className={strongText}> design and implementation </span> of web applications and
            microservices as part of the Loanscape program specialised in structured financing.
          </li>
          <li>
            Create, use and enhance our
            <span className={strongText}> CI/CD pipelines </span>
          </li>
          <li>
            Maintain high <span className={strongText}> code quality </span>
            <i>(Design, Discussions, Code review, SonarQube)</i>
          </li>
          <li>
            Enhance both
            <span className={strongText}> users and developers experience </span>
          </li>
          <li>
            <i className={strongText}> Collaborate </i> with different types of actors within an{' '}
            <i className={strongText}> international program </i>
          </li>
        </ExperienceProject>
        <ExperienceProject
          dates="2018 - 2021"
          title="Java software engineer"
          project="AceTP"
          icon="BnpParibas"
          company="Bnp Paribas"
          technologies={['Java', 'SQL', 'Hibernate', 'Angular']}
        >
          <li>
            Participated in the <i className={strongText}>maintaining and evolution </i> of a
            securities management application, used in multiple international global markets
          </li>
          <li>
            Helped improve <i className={strongText}>performance</i>, streamline and enrich complex
            processes (profiling, refactoring)
          </li>
          <li>
            <i className={strongText}>Investigated</i> & fixed anomalies in production
          </li>
        </ExperienceProject>
        <ExperienceProject
          dates="Mar - Oct 2017"
          title="Software engineering intern"
          project="LDMS"
          icon="SocieteGenerale"
          company="Société Générale"
          technologies={['Java', 'Angular', 'Swagger', 'REST']}
        >
          <li>
            Participated in the <i className={strongText}>revamp</i> of a document management
            application using modern technologies
          </li>
          <li>
            Maintained high <span className={strongText}> code quality </span>
            <i>(Code review, SonarQube)</i>
          </li>
          <li>
            Integrated the <span className={strongText}>professional</span> world of software
            development (Teamwork, Communication)
          </li>
        </ExperienceProject>
      </Section>
    </>
  )
}

interface Props {
  children: ReactNode
  dates: string
  title: string
  project: string
  icon: IconKind
  company: string
  technologies: IconKind[]
}

function ExperienceProject({
  dates,
  title,
  project,
  icon,
  company,
  technologies,
  children,
}: Props) {
  return (
    <>
      <div className="flex gap-4 p-4">
        <div className="flex min-w-[140px] flex-col items-start gap-1">
          <h3 className="self-start">{dates}</h3>
          <div className="flex flex-grow flex-col justify-center gap-4">
            <Icon kind={icon} sizeX={16} sizeY={10}></Icon>
            <div>{company}</div>
          </div>
        </div>
        <div>
          <h3>
            {title} &nbsp;•&nbsp; {project}
          </h3>
          <ul className={lightText + 'dashed-list text-sm'}>{children}</ul>
          <div className="items-left mt-2 flex w-full flex-wrap justify-end gap-2">
            {technologies.map((tech: IconKind) => (
              <span key={tech} className="flex items-center gap-1 text-sm">
                <Icon kind={tech} size={4}></Icon> {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
