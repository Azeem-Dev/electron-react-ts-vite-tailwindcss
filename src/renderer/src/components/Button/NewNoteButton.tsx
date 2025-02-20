import { ActionButton, ActionButtonProps } from '@/components'
import { AiFillFileAdd } from 'react-icons/ai'

export const NewNoteButton = ({ ...props }: ActionButtonProps): JSX.Element => {
  return (
    <ActionButton {...props}>
      <AiFillFileAdd className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
