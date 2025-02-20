import { Content, RootLayout, Sidebar } from "@/components"


const App = (): JSX.Element => {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
    <RootLayout>
      <Sidebar className="p-2">
        Sidebar
      </Sidebar>
      <Content className="border-l border-l-white/20 bg-zinc-900/50 ">
      Content
      </Content>
    </RootLayout>
    </>
  )
}

export default App
