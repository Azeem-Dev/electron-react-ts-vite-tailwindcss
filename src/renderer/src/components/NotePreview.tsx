import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps, useEffect, useState } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>
export const NotePreview = ({
  title,
  lastEditTime,
  isActive,
  className,
  ...props
}: NotePreviewProps): JSX.Element => {
  const [formattedDate, setFormattedDate] = useState<string>('')

  useEffect(() => {
    const fetchFormattedDate = async (): Promise<void> => {
      const date = await formatDateFromMs(lastEditTime)
      setFormattedDate(date)
    }

    fetchFormattedDate()
  }, [lastEditTime])

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{formattedDate}</span>
    </div>
  )
}
