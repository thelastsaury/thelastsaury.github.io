// Typed onto the typewriter's sheet, newest first. This page is the CV, but
// a readable one: two or three bullets per job, each with the one fact worth
// keeping. The long versions are on the Projects page. Text in a reader's
// language is a { en, zh } pair (src/lang.ts); dates stay as they are.
// [text](/projects/<id>) in a bullet links to that project's tray.

import type { Text } from '../lang'

export type Job = {
  company: Text
  url: string
  role: Text
  place: Text
  start: string
  end: string
  bullets: Text[]
}

export const experience: Job[] = [{
  company: { en: 'Wind Ensemble', zh: '管乐社' }, url: '',
  role: { en: 'Founder and president', zh: '创办人、社长' },
  place: { en: 'High school', zh: '高中' }, start: '', end: '',
  bullets: [{ en: 'Coordinated rehearsals and organized performances. The club became the school wind ensemble.', zh: '联系指导老师、协调排练并组织演出。社团后来发展为学校管乐团。' }],
}, {
  company: '翘楚之声', url: '',
  role: { en: 'Campus media', zh: '校园媒体实践' },
  place: { en: 'High school', zh: '高中' }, start: '', end: '',
  bullets: [{ en: 'Filmed and edited school videos and laid out campus posts.', zh: '参与节气主题校园宣传视频的拍摄，用剪映剪辑视频、用秀米排版校园推文。' }],
}]
export type School = { school: Text; degree: Text; start: string; end: string }
export const education: School[] = [{
  school: { en: 'Communication University of China', zh: '中国传媒大学' },
  degree: { en: 'Information Management and Information Systems', zh: '信息管理与信息系统' },
  start: '', end: '',
}]
