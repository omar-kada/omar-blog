import { border as borderCss } from '@/css/constants'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  border?: boolean
  className?: string
}

export function Section({ children, title = 'Title', border = true, className }: Props) {
  return (
    <div className={className + ' flex flex-col'}>
      <h3 className="m-1">{title}</h3>
      <section className={'m-1 flex-grow space-y-2' + (border ? borderCss : ' ')}>
        {children}
      </section>
    </div>
  )
}
