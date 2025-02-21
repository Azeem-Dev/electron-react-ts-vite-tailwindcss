import { ComponentProps } from "react";

export type NoteInfo = {
  title: string
  lastEditTime: number
}

export type NoteContent = string

export type UseNotesListProps = {
  onSelect?: () => void
};

export type UseNotesListReturn = {
  notes: NoteInfo[]
  selectedNoteIndex: number | null
  handleNoteSelect: (index: number) => () => Promise<void>
};
export type NotePreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>