import { NoteInfo } from '@shared/models'
import { appDirectoryPath, fileEncoding } from '@shared/constants'
import { ensureDir, readdir, readFile, stat } from 'fs-extra'
import { cwd } from 'process'
import { GetNotesType, ReadNoteType } from '@shared/types'

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

export const readNote: ReadNoteType = async (title): Promise<string> => {
  const rootDir = getRooDir()
  return readFile(`${rootDir}/${title}`, { encoding: fileEncoding })
}
