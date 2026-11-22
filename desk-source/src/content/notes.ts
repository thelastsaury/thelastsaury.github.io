// The notebook on the About desk. Newest entry is the open page; older
// ones are earlier pages. Paragraphs are separated by a blank line;
// [text](/about/x.jpg) opens that picture over the page, ![alt](/about/x.jpg)
// puts a small round picture in the line, and
// ![alt](/about/x.jpg /about/full/x.jpg) opens the larger one on click.

import type { Text } from '../lang'

export type Note = {
  date: string
  title: Text
  body: Text
}

// A square print at the head of the notebook page, whichever entry is open (480×480).
export const portrait = { src: '/projects/island/hero.jpeg', alt: '绒息岛项目主视觉' }

export const notes: Note[] = [{
  date: '2026-11-22',
  title: { en: 'About me', zh: '关于我' },
  body: {
    en: 'Hi, I’m Soliel from CUC. I’ve played the flute for nine years. In high school I started a wind ensemble and helped make school videos and posts.',
    zh: '嗨，我是 Soliel，在中传读书。我吹了九年长笛，高中组过管乐社，也在「翘楚之声」拍过校园视频、剪过片子、排过推文。',
  },
}]
