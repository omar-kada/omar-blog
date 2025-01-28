'use client'
import { lightText } from '@/css/constants'
import CustomLink from '@/components/Link'
import { Section } from '@/components/Section'
import { Icon, IconKind } from '@/components/icons/Icon'
import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

export function PersonalProjects() {
  return (
    <Section title="Personal Projects" className="h-full">
      <PersonalProject
        title="Proxmox Home Server"
        technologies={['Proxmox', 'Docker', 'Tailscale']}
      >
        <li>
          Replacing cloud services like Google photos, Documents manager, Google Drive & more with
          self hosted services
        </li>
        <li>Playground for Containerization and Virtualization</li>
        <li>Remote connection using Tailscale </li>
      </PersonalProject>
      <PersonalProject
        title="Personal Blog - WIP"
        technologies={['React', 'NextJS', 'Tailwind']}
        href="/about"
      >
        <li className={lightText + 'text-sm'}>
          Used as playgroud for my web and blogging projects
        </li>
        <li className={lightText + 'text-sm'}>Learning & testing other technologies</li>
      </PersonalProject>
    </Section>
  )
}

type Props = {
  title: string
  children: ReactNode
  technologies: IconKind[]
  href?: string
}

function PersonalProject({ title, children, technologies, href }: Props) {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <h3>{title}</h3>
        {href ? (
          <span>
            <CustomLink href="/">
              <ArrowUpRight href="/" size={20}></ArrowUpRight>
            </CustomLink>
          </span>
        ) : null}
      </div>
      <ul className={lightText + 'dashed-list ml-3 text-sm'}>{children}</ul>
      <div className="iitems-left mt-2 flex w-full flex-wrap justify-end gap-2">
        {technologies.map((tech: IconKind) => (
          <span key={tech} className="flex items-center gap-1 text-sm">
            <Icon kind={tech} size={4}></Icon> {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
