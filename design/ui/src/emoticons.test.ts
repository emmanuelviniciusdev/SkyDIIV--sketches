import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

import {
  emoticonById,
  emoticonGroups,
  emoticons,
  emoticonSrc,
  kddiEmoticons,
} from './emoticons'

const gifDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'assets/emoticons/kddi',
)

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
      source: 'kddi',
    })
    expect(emoticonById('sparkles')?.src).toMatch(/sparkles\.gif(?:\?.*)?$/)
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

  it('ships a gif for every mark', () => {
    expect(readdirSync(gifDir).filter((name) => name.endsWith('.gif'))).toHaveLength(
      630,
    )

    for (const item of emoticons) {
      expect(existsSync(path.join(gifDir, `${item.id}.gif`)), item.id).toBe(true)
      expect(item.src).toBe(emoticonSrc(item.id))
    }
  })
})
