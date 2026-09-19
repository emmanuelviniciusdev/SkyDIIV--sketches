import catalog from './emoticons.json'

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

export const emoticons = catalog as Emoticon[]

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
