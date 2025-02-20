import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const formatDateFromMs = async (ms: number): Promise<string> => {
  const locale = window?.context?.locale
  const formatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'UTC'
  })
  return formatter.format(ms)
}

export const cn = (...args: ClassValue[]): string => {
  return twMerge(clsx(...args))
}
