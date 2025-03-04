import { NoteInfo } from '@shared/models'
import { appDirectoryPath, fileEncoding } from '@shared/constants'
import { ensureDir, readdir, readFile, stat, writeFile, writeFileSync } from 'fs-extra'
import { cwd } from 'process'
import { GetNotesType, ReadNoteType, WriteNoteType, CreateNoteType } from '@shared/types'
import { dialog } from 'electron'
import path from 'path'

export const getRooDir = (): string => {
  return `${cwd()}${appDirectoryPath}`
}

export const getNotes: GetNotesType = async () => {
  const rootDir = getRooDir()
  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })
  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFileName))
}

export const getNoteInfoFromFileName = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRooDir()}/${filename}`)
  return {
    title: filename.replace('/\.md$/', ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNoteType = async (filename): Promise<string> => {
  const rootDir = getRooDir()
  return readFile(`${rootDir}/${filename}`, { encoding: fileEncoding })
}

export const writeNote: WriteNoteType = async (filename, content) => {
  const rootDir = getRooDir()
  console.log(`Writing note ${filename}`)

  return writeFile(`${rootDir}/${filename}`, content, { encoding: fileEncoding })
}

export const createNote: CreateNoteType = async () => {
  const rootDir = getRooDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New note',
    defaultPath: `${rootDir}/untitled.md`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (canceled || !filePath) {
    console.log('Note creation canceled')
    return false
  }

  const { name: fileName, dir: parentDir } = path.parse(filePath)

  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation failed',
      message: `All notes must be saved under ${rootDir}.
      Avoid using other directories!`
    })

    return false
  }

  console.log(`Creating note: ${filePath} ${fileName}`)

  await writeFileSync(filePath, '')

  return `${fileName}.md`
}