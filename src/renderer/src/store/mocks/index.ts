import { NoteInfo } from '@shared/models';

const getRandomDate = (): number => {
  const start = new Date(2023, 0, 1).getTime(); // Start from Jan 1, 2023
  const end = new Date().getTime(); // Current date
  return new Date(start + Math.random() * (end - start)).getTime();
};

export const notesMocks: NoteInfo[] = [
  {
    title: `📌 Welcome`,
    lastEditTime: getRandomDate(),
  },
  {
    title: `📝 Note 1`,
    lastEditTime: getRandomDate(),
  },
  {
    title: `✍️ Note 2`,
    lastEditTime: getRandomDate(),
  },
  {
    title: `📖 Note 3`,
    lastEditTime: getRandomDate(),
  }
];
