import * as socialIcons from './social-icons'
import * as techIcons from './tech-icons'
import * as companiesIcons from './companies-icons'

const icons = { ...socialIcons, ...techIcons, ...companiesIcons }
export type IconKind = keyof typeof icons | string

type IconProps = {
  kind: IconKind
  href?: string | undefined
  size?: number
  sizeX?: number
  sizeY?: number
}

export const Icon = ({ kind, href, size = 8, sizeX, sizeY }: IconProps) => {
  const Svg = icons[kind]
  if (!Svg) {
    return null
  }
  const Internal = () => (
    <>
      <span className="sr-only">{kind}</span>
      <Svg
        className={`text-gray-700 hover:text-primary-500  dark:text-gray-200  dark:hover:text-primary-400	 h-${sizeY ?? size} w-${sizeX ?? size}`}
      />
    </>
  )

  if (href === undefined) {
    return (
      <span className=" text-sm text-gray-500 transition hover:text-gray-600">
        <Internal />
      </span>
    )
  }

  return (
    <a
      className=" text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <Internal />
    </a>
  )
}
