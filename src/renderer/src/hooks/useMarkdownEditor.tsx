import { selectedNoteAtom } from '@renderer/store'
import { SelectedNoteReturn } from '@shared/models'
import { useAtomValue } from 'jotai'

export const useMarkdownEditor = (): SelectedNoteReturn | null => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  return selectedNote
}
