import {
  ActionButtonsRow,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import React, { useRef } from 'react'

const App = (): JSX.Element => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = (): void => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <React.Fragment>
      <RootLayout>
        <Sidebar className='p-2'>
          <ActionButtonsRow className='flex justify-between mt-1 mb-2' />
          <NotePreviewList className='mt-3 space-y-1 ' onSelect={resetScroll}/>
        </Sidebar>
        <Content ref={contentContainerRef} className='border-l border-l-white/20 bg-zinc-900/50 '>
          <FloatingNoteTitle className='pt-2' />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </React.Fragment>
  )
}

export default App
