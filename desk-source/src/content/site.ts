// The landing's title slide, and the contact links that close the About page.
// The caption and the place follow the reader's language (src/lang.ts).
// Change these first: they are the name on the slide and in the page title.

import type { Text } from '../lang'

export const site: { name: string; caption: Text; place: Text; email: string; links: { label: string; href: string }[] } = {
  name: 'Soliel',
  caption: { en: 'Learning lots of things.', zh: '正在学习很多东西' },
  place: { en: 'from cuc', zh: 'from cuc' },
  email: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/sanma-no-yoru' },
  ],
}
