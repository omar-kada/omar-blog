import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { Icon } from '@/components/icons/Icon'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Icon kind="Mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <Icon kind="Github" href={siteMetadata.github} size={6} />
          <Icon kind="Linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link className="hover:text-primary-500" href="/">
            {siteMetadata.title}
          </Link>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <Link
            className="hover:text-primary-500"
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >
            Blog based on Tailwind Nextjs starter blog by @timlrx
          </Link>
        </div>

        <div className="mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link className="hover:text-primary-500" href="https://devicon.dev/">
            Tech icons from devicon.dev
          </Link>
          <span>{` • `}</span>
          <Link
            className="hover:text-primary-500"
            href="https://www.flaticon.com/free-icons/ramadan"
          >
            Logo icon created by Freepik - Flaticon
          </Link>
        </div>
      </div>
    </footer>
  )
}
