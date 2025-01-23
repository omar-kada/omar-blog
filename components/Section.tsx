import { borderOnMd } from '@/css/constants'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  border?: boolean
  className?: string
}

export function Section({ children, title, border = true, className = '' }: Props) {
  return (
    <div className={className + ' mt-2 flex flex-col md:mt-0'}>
      <h3 className="m-1">{title}</h3>
      <section className={'m-1 flex-grow space-y-2' + (border ? borderOnMd : ' ')}>
        {children}
      </section>
    </div>
  )
}
