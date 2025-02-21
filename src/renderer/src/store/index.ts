import { NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { notesMocks } from '@/store/mocks'

export const notesAtom = atom<NoteInfo[]>(notesMocks)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const selectedNoteIndex = get(selectedNoteIndexAtom)

  if (selectedNoteIndex == null || selectedNoteIndex == undefined) return null

  const selectedNote = notes[selectedNoteIndex]

  return {
    ...selectedNote,
    content: `Hello from notes ${selectedNoteIndex}`
  }
})
