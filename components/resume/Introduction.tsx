'use client'
import { lightText } from '@/css/constants'
import { MapPin, Phone } from 'lucide-react'
import { Linkedin, Mail } from '@/components/icons/social-icons'
import CustomLink from '@/components/Link'

export function Introduction() {
  return (
    <>
      <div className="flex flex-grow flex-col">
        <h1> Omar KADA </h1>
        <h3> FullStack Software Engineer </h3>
        <div className={lightText}> 7+ years of experience </div>
        <div className={lightText + 'flex items-center space-x-2'}>
          <MapPin size={16}></MapPin> <span>Paris, France</span>
        </div>
      </div>
      <div className={lightText + 'flex flex-grow flex-col'}>
        <CustomLink
          href={'mailto:kadaomar@hotmail.com'}
          className="flex items-center justify-end space-x-2 hover:text-primary-500"
        >
          <span>kadaomar@hotmail.com</span>
          <Mail className={`h-4 w-4 fill-current`} />
        </CustomLink>
        {/* <div className="flex items-center justify-end space-x-2">
          <span>0X XX XX XX XX</span> <Phone size={16} className="fill-current"></Phone>
        </div> */}
        <CustomLink
          href={'https://linkedin.com/in/kada-omar'}
          className="flex items-center justify-end space-x-2 hover:text-primary-500"
        >
          <span>in/kada-omar</span>
          <Linkedin className={`h-4 w-4 fill-current`} />
        </CustomLink>
      </div>
    </>
  )
}
