import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    context: {
      getLocale: () => Promise<string>
    }
  }
}
