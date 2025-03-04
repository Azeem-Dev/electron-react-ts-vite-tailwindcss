import { NoteInfo } from '@shared/models'
import { appDirectoryPath, fileEncoding } from '@shared/constants'
import { ensureDir, readdir, readFile, stat, writeFile } from 'fs-extra'
import { cwd } from 'process'
import { GetNotesType, ReadNoteType, WriteNoteType } from '@shared/types'

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
