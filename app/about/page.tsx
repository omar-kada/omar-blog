import { genPageMetadata } from 'app/seo'
import { Resume } from '@/components/resume'
import { Download } from 'lucide-react'
import CustomLink from '@/components/Link'
import { border } from '@/css/constants'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div>
        <Resume />

        <CustomLink
          title="Download CV"
          href="/static/documents/Omar KADA - CV 2025.pdf"
          className={
            ' fixed bottom-4 right-4 h-14 w-14 rounded-full p-3 ' +
            ' flex items-center justify-center ' +
            ' bg-black text-white hover:text-primary-500 dark:bg-white dark:text-black ' +
            border
          }
        >
          <Download size={32} />
        </CustomLink>
      </div>
    </>
  )
}
