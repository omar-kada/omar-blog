import {
  borderGlow,
  borderGlowOnHover,
  colorOnHover,
  glow,
  glowOnHover,
  strongText,
  strongTextOnHover,
} from '@/css/constants'
import { Icon, IconKind } from './Icon'

type Props = {
  tags: Array<IconKind | string>
  autoGlows?: boolean
}

export const IconTags = ({ tags, autoGlows }: Props) => {
  return (
    <span className="flex select-none flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className={
            (autoGlows ? glow + borderGlow : glowOnHover + borderGlowOnHover) +
            'group mr-2 flex items-center space-x-1'
          }
        >
          <span className={autoGlows ? '' : colorOnHover}>
            <Icon kind={tag} size={5} />
          </span>
          <span className={autoGlows ? strongText : strongTextOnHover}>{tag}</span>
        </span>
      ))}
    </span>
  )
}
