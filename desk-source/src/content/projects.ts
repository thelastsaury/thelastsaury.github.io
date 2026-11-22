// One project is one tray of slides in the projector. The tray opens on the
// cover (the project at a glance), then one slide per picture, each with a
// short note, then the results. The details page holds the long version.
// Adding a project is one entry here; put its files in public/projects/<id>/.
// Text in a reader's language is a { en, zh } pair (src/lang.ts); names,
// terms and the metrics stay one string.
// Films are too heavy for the repo: host them on any server or bucket that
// serves video (Cloudflare R2, S3, a CDN) and point src at them. The Troupe
// example's films are served from the original site's bucket at MEDIA. A film
// made in both languages gives src and poster as { en, zh } pairs, and the
// reader's language picks one.

import type { Text } from '../lang'

type Picture = { src: string; alt: string }

export type Project = {
  id: string
  title: string
  /** where it was made: a company, a school, 'Open source' */
  org: string
  period: string
  /** one sentence: what it is */
  pitch: Text
  /** who it was made with, shown under the pitch */
  with?: { name: string; href: string }
  cover: Picture
  slides: (Picture & { title: Text; body: Text })[]
  /** a 60–90 s screen recording, shown as a slide after the cover, with a line on what it follows */
  film?: { src: Text; poster: Text; caption: Text }
  metrics: { value: string; label: string; caveat: string }[]
  results?: Picture
  /** what in the demo is illustrative rather than real */
  disclaimer?: Text
  stack: string[]
  /** the details page: background, what I did, method and trade-offs; results and links follow from the fields above */
  details: { heading: Text; body: Text[] }[]
  /** the project's own public site, when it is live */
  site?: string
  links: { label: Text; href: string }[]
}

export type Slide =
  | { kind: 'cover' }
  | { kind: 'film'; src: Text; poster: Text; caption: Text }
  | { kind: 'picture'; src: string; alt: string; title: Text; body: Text }
  | { kind: 'results' }

export function slidesOf(p: Project): Slide[] {
  return [
    { kind: 'cover' },
    ...(p.film ? [{ kind: 'film' as const, ...p.film }] : []),
    ...p.slides.map((s) => ({ kind: 'picture' as const, ...s })),
    ...(p.metrics.length ? [{ kind: 'results' as const }] : []),
  ]
}

export function contextOf(p: Project) {
  return [p.org, p.period].filter(Boolean).join(' · ')
}

export const projects: Project[] = [{
  id: 'island', title: '绒息岛', org: '百校造百岛', period: '2026.10',
  pitch: { en: 'Two players work together to restore an island, starting and ending at its bell.', zh: '从一次敲钟，到一座岛复苏。' },
  cover: { src: '/projects/island/hero.jpeg', alt: '绒息岛项目主视觉' },
  slides: [
  {
    "src": "/projects/island/island.jpeg",
    "alt": "实机岛屿概览",
    "title": {
      "en": "The island at a glance",
      "zh": "一座可以走完的岛"
    },
    "body": {
      "en": "The route goes from the beach through the forest, sky island and volcano, then back to the bell.",
      "zh": "从沙滩出发，绕岛一圈，再回来修钟。"
    }
  },
  {
    "src": "/projects/island/beach.jpeg",
    "alt": "沙滩双人机关",
    "title": {
      "en": "Press together",
      "zh": "沙滩 · 同步按键"
    },
    "body": {
      "en": "Each player finds four shells to unlock a button. The gate opens when both press at the same time.",
      "zh": "各找四个贝壳，再同时按下按钮开门。"
    }
  },
  {
    "src": "/projects/island/tree-before.jpeg",
    "alt": "修复前的古树",
    "title": {
      "en": "Before the tree heals",
      "zh": "森林 · 找到三样材料"
    },
    "body": {
      "en": "The bare tree needs three materials gathered in the forest.",
      "zh": "收集三样材料，让枯树恢复生机。"
    }
  },
  {
    "src": "/projects/island/tree-after.jpeg",
    "alt": "修复后重新长出树冠的古树",
    "title": {
      "en": "After the tree heals",
      "zh": "森林 · 看见任务结果"
    },
    "body": {
      "en": "The restored canopy makes the result of the players’ actions visible.",
      "zh": "树冠重新长出，任务结果一眼可见。"
    }
  },
  {
    "src": "/projects/island/bird.jpeg",
    "alt": "小鸟对话",
    "title": {
      "en": "A feather for the next stage",
      "zh": "天空岛 · 羽毛再次派上用场"
    },
    "body": {
      "en": "The bird explains how to glide. After building a route to the sky island together, the players use the feather to help the sheep.",
      "zh": "用小鸟送的羽毛滑翔，帮助云团羊。"
    }
  },
  {
    "src": "/projects/island/grid.jpeg",
    "alt": "亮起的九宫格",
    "title": {
      "en": "Unlocking the volcano",
      "zh": "花瓣兔 · 解谜开路"
    },
    "body": {
      "en": "After the rabbit’s three riddles, the players light the grid together to open the way to the volcano.",
      "zh": "猜谜拿种子，踩亮九宫格，打开火山入口。"
    }
  },
  {
    "src": "/projects/island/volcano.jpeg",
    "alt": "火山双人平台",
    "title": {
      "en": "Open the way for each other",
      "zh": "火山 · 为同伴解锁落脚点"
    },
    "body": {
      "en": "Each step unlocks a platform for the other player. The pair reaches the middle, opens the portal and rescues the lizard.",
      "zh": "每前进一步，就给同伴解锁一个落脚点。"
    }
  }
],
  metrics: [], stack: [],
  details: [
  {
    "heading": {
      "en": "My role",
      "zh": "我负责的部分"
    },
    "body": [
      {
        "en": "I designed the story, dialogue, item uses, quest flow and co-op triggers, then used AI to help turn them into playable scenes.",
        "zh": "我负责小岛复苏的故事主线、角色对话、道具用途、任务流程和双人机关的触发条件，再借助 AI 把这些设定做成可操作的场景。"
      }
    ]
  },
  {
    "heading": {
      "en": "From ringing to repairing the bell",
      "zh": "从敲钟到修钟"
    },
    "body": [
      {
        "en": "The players ring the beach bell, restore the forest tree, use its reward to help the sheep, solve the rabbit and grid puzzles, and rescue the lizard. Back on the main island they receive the metal needed to repair the bell.",
        "zh": "两人在沙滩敲钟召唤向导，协力开门进入森林。治愈古树后，他们拿到滑翔羽毛，搭路登上天空岛帮助云团羊。解开花瓣兔的谜语和九宫格后，两人进入火山救出蜥蜴。回到主岛后，他们获得金属块，修复最初那口钟。"
      }
    ]
  },
  {
    "heading": {
      "en": "Two rhythms of cooperation",
      "zh": "两种合作节奏"
    },
    "body": [
      {
        "en": "The beach gives players room to explore separately before a synchronized action. The volcano asks them to take turns creating a foothold for each other.",
        "zh": "沙滩机关先让玩家分头找贝壳，再要求同步按键。火山机关则让玩家轮流为对方解锁平台，每前进一步也为同伴创造一个落脚点。"
      }
    ]
  },
  {
    "heading": {
      "en": "Clues and feedback in the scene",
      "zh": "让提示和反馈留在场景里"
    },
    "body": [
      {
        "en": "Dialogue points to the next action, while the tree canopy and lit grid show the result. The feather connects two tasks: players hear how it works in the forest and use it on the sky island.",
        "zh": "我用向导和动物的对话交代下一步，用树冠生长和九宫格亮起呈现操作结果。羽毛把两段任务连了起来：森林里先听到用途，到了天空岛才真正用上。"
      }
    ]
  }
],
  links: [{ label: { en: 'Full project notes', zh: '阅读完整项目记录' }, href: '/island.html' }],
}]
