import catalog from './emoticons.json'
import { emoticonAssets } from './emoticon-assets'

export const emoticonSources = ['kddi'] as const

export type EmoticonSource = (typeof emoticonSources)[number]

export type Emoticon = {
  id: string
  code: string
  glyph: string
  name: string
  group: string
  subgroup: string
  src: string
  source: EmoticonSource
}

type EmoticonRecord = Omit<Emoticon, 'src'> & { src?: string }

export function emoticonSrc(id: string): string {
  const src = emoticonAssets[id]
  if (!src) {
    throw new Error(`Unknown emoticon: ${id}`)
  }
  return src
}

export const emoticons = (catalog as EmoticonRecord[]).map((item) => ({
  ...item,
  src: emoticonSrc(item.id),
})) satisfies Emoticon[]

export const kddiEmoticons = emoticons

export const emoticonGroups = kddiEmoticons.reduce<
  { name: string; items: Emoticon[] }[]
>((groups, item) => {
  const current = groups[groups.length - 1]
  if (current?.name === item.group) {
    current.items.push(item)
    return groups
  }
  groups.push({ name: item.group, items: [item] })
  return groups
}, [])

export function emoticonById(id: string) {
  return emoticons.find((item) => item.id === id)
}
