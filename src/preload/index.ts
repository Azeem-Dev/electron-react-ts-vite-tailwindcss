import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWinodw')

const context = {
  locale: navigator.language
}

try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('context', context)
} catch (error) {
  console.error(error)
}
