import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { GetNotesType, ReadNoteType, WriteNoteType, CreateNoteType, DeleteNoteType } from '@shared/types'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWinodw')

const context: {
  locale: string
  getNotes: GetNotesType
  readNote: ReadNoteType
  writeNote: WriteNoteType,
  createNote: CreateNoteType,
  deleteNote: DeleteNoteType
} = {
  locale: navigator.language,
  getNotes: (...args: Parameters<GetNotesType>) => ipcRenderer.invoke('getNotes', ...args),
  readNote: (...args: Parameters<ReadNoteType>) => ipcRenderer.invoke('readNote', ...args),
  writeNote: (...args: Parameters<WriteNoteType>) => ipcRenderer.invoke('writeNote', ...args),
  createNote: (...args: Parameters<CreateNoteType>) => ipcRenderer.invoke('createNote', ...args),
  deleteNote: (...args: Parameters<DeleteNoteType>) => ipcRenderer.invoke('deleteNote', ...args),
}

try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('context', context)
} catch (error) {
  console.error(error)
}
