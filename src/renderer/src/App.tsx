import {
  ActionButtonsRow,
  Content,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import React from 'react'

const App = (): JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <React.Fragment>
      <RootLayout>
        <Sidebar className='p-2'>
          <ActionButtonsRow className='flex justify-between mt-1 mb-2' />
          <NotePreviewList className='mt-3 space-y-1 ' />
        </Sidebar>
        <Content className='border-l border-l-white/20 bg-zinc-900/50 '>
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </React.Fragment>
  )
}

export default App
