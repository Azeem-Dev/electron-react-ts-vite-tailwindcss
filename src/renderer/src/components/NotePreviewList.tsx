import { notesMocks } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>): JSX.Element => {
  return (
    <ul {...props}>
      {notesMocks.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
