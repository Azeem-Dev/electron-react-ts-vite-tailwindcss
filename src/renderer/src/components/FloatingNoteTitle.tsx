import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNoteTitle = ({
  className,
  ...props
}: ComponentProps<'div'>): JSX.Element | null => {
  let selectedNote = useAtomValue(selectedNoteAtom)

  if (!selectedNote) return null
  selectedNote = { ...selectedNote, title: selectedNote.title.replace('.md', '') }

  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className='text-gray-400'>{selectedNote.title}</span>
    </div>
  )
}
