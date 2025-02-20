import { ComponentProps } from 'react'
import { DeleteNoteButton, NewNoteButton } from './Button'

export const ActionButtonsRow = ({ ...props }: ComponentProps<'div'>): JSX.Element => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
