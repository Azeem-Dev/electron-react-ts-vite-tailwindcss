import { ActionButton, ActionButtonProps } from '@/components'
import { deleteNotAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  const deleteNote = useSetAtom(deleteNotAtom)

  const handleDelete = async ():Promise<void> => {
    await deleteNote()
  }

  return (
    <ActionButton onClick={handleDelete} {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
