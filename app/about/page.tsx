import { genPageMetadata } from 'app/seo'
import { Resume } from '@/components/resume'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div>
        <Resume />
      </div>
    </>
  )
}
