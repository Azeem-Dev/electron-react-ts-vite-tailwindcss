import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if (!process.contextIsolated)
  throw new Error('contextIsolation must be enabled in the BrowserWinodw')

const context = {
  // Exposing a method to invoke the 'get-locale' IPC call from the renderer
  getLocale: async (): Promise<string> => ipcRenderer.invoke('get-locale')
}

try {
  contextBridge.exposeInMainWorld('electron', electronAPI)
  contextBridge.exposeInMainWorld('context', context)

} catch (error) {
  console.error(error)
}
