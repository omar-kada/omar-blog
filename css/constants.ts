import { twMerge } from 'tailwind-merge'
const merged = (...strs: string[]) => ` ${twMerge(...strs)} `

export const border = ' rounded border dark:border-gray-700 p-1 '
export const borderOnMd = ' md:rounded md:border dark:border-gray-700 p-1 '
export const borderGlow = merged(border, 'dark:border-gray-300 border-gray-700')
export const borderGlowOnHover = merged(border, 'dark:hover:border-gray-300 hover:border-gray-700')

export const glow = ' drop-shadow-glow '
export const glowOnHover = ' hover:drop-shadow-glow '
export const fullOpacityOnGroupHover = ' opactiy-75 group-hover:opacity-100 '
export const grayscale = ' grayscale dark:brightness-200 '
export const colorOnHover = merged(
  grayscale,
  ' group-hover:grayscale-0 group-hover:brightness-100 '
)

export const smSpanAuto = ' sm:col-span-auto sm:row-span-auto '
export const smStartAuto = ' sm:col-start-auto sm:row-start-auto '
export const smAuto = merged(smSpanAuto, smStartAuto)

export const lightText = ' text-gray-600 dark:text-gray-400 '
export const lighterText = ' text-gray-200 dark:text-gray-800 '
export const strongText = ' font-semibold dark:text-gray-100 dark:font-normal '
export const strongTextOnHover = merged(
  lightText,
  ' group-hover:text-black group-hover:dark:text-gray-100 '
)

export const divideStyle = ' divide-gray-200 dark:divide-gray-700 '
