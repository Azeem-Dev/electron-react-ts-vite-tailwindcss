import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotesType, ReadNoteType, WriteNoteType,CreateNoteType,DeleteNoteType } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotesType
      readNote: ReadNoteType
      writeNote: WriteNoteType,
      createNote: CreateNoteType,
      deleteNote:DeleteNoteType
    }
  }
}
