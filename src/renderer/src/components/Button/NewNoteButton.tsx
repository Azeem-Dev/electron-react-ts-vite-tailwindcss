import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { AiFillFileAdd } from 'react-icons/ai'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = ():void => {
    createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreation} {...props} >
      <AiFillFileAdd className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
