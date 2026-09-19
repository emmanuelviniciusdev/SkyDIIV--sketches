import { describe, expect, it } from 'vitest'

import {
  emoticonById,
  emoticonGroups,
  emoticons,
  kddiEmoticons,
} from './Emoticons'

describe('emoticon repository', () => {
  it('keeps every KDDI mark', () => {
    expect(kddiEmoticons).toHaveLength(630)
    expect(emoticons).toHaveLength(630)
    expect(emoticons.every((item) => item.source === 'kddi')).toBe(true)
  })

  it('uses unique ids', () => {
    expect(new Set(emoticons.map((item) => item.id)).size).toBe(emoticons.length)
  })

  it('does not catalog the sparkling star as a KDDI image', () => {
    expect(emoticonById('sparkling-star')).toBeUndefined()
    expect(emoticonById('sparkles')).toMatchObject({
      name: 'sparkles',
      code: 'U+2728',
      src: '/emoticons/kddi/sparkles.gif',
      source: 'kddi',
    })
  })

  it('groups KDDI marks in chart order', () => {
    expect(emoticonGroups.map((group) => group.name)).toEqual([
      'Smileys & Emotion',
      'People & Body',
      'Animals & Nature',
      'Food & Drink',
      'Travel & Places',
      'Activities',
      'Objects',
      'Symbols',
      'Flags',
    ])
    expect(emoticonGroups.reduce((sum, group) => sum + group.items.length, 0)).toBe(
      630,
    )
  })
})
