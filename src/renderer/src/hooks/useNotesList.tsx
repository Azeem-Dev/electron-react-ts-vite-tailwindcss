/* eslint-disable prettier/prettier */
import { notesAtom, selectedNoteIndexAtom } from '@/store'
import { UseNotesListProps, UseNotesListReturn } from '@shared/models';
import { useAtom, useAtomValue } from 'jotai'

export const useNotesList = ({ onSelect }: UseNotesListProps): UseNotesListReturn => {
  const notes = useAtomValue(notesAtom);
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom);

  const handleNoteSelect = (index: number): (() => Promise<void>) => async (): Promise<void> => {
    setSelectedNoteIndex(index)
    if (onSelect) {
      onSelect()
    }
  };

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect,
  }
};
