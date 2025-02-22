import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'
import { useNotesList } from '@/hooks/useNotesList'
import { NotePreviewListProps } from '@shared/models'

export const NotePreviewList = ({
  className,
  onSelect,
  ...props
}: NotePreviewListProps): JSX.Element => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({onSelect})
  if (notes.length == 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
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
