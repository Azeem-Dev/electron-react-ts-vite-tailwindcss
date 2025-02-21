import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'

export const useMarkdownEditor = (): {
  content: string
  title: string
  lastEditTime: number
} | null => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  return {
    selectedNote
  }
}
