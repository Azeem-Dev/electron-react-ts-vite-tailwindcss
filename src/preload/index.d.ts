import { ElectronAPI } from '@electron-toolkit/preload'
import { GetNotesType, ReadNoteType, WriteNoteType } from '@shared/types'

declare global {
  interface Window {
    electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotesType
      readNote: ReadNoteType
      writeNote: WriteNoteType
    }
  }
}
