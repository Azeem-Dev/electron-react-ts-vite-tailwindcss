import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@/hooks/useNotesList'
import { NotePreviewListProps } from '@shared/models'
import { isEmpty } from 'lodash'

export const NotePreviewList = ({
  className,
  onSelect,
  ...props
}: NotePreviewListProps): JSX.Element | null => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({ onSelect })

  if (!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  const newNotes = notes.map(note => ({...note,title:note.title.replace('.md','')}))
  return (
    <ul className={className} {...props}>
      {newNotes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          {...note}
          isActive={selectedNoteIndex === index}
          onClick={handleNoteSelect(index)}
        />
      ))}
    </ul>
  )
}
