// Photos pinned on the About corkboard: two rows of three. Put image files in
// public/board/: `src` is the square print on the board (512×512), `full` the
// whole photo the About page opens on click (about 1600px on the long side).
// A short caption is written under the photo. Without `src` the slot shows a
// placeholder print.

export type Photo = { src?: string; full?: string; caption?: string }

export const photos: Photo[] = ['hero', 'island', 'beach', 'volcano', 'tree-after', 'bird'].map((name) => ({
  src: `/projects/island/${name}.jpeg`,
  full: `/projects/island/${name}.jpeg`,
  caption: '绒息岛',
}))
