import { NoteInfo, NoteContent } from "@shared/models";

export type GetNotesType = () => Promise<NoteInfo[]>

export type ReadNoteType = (title: NoteInfo['title']) => Promise<NoteContent>