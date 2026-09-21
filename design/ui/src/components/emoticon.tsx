import * as React from 'react'

import { emoticonById } from '../emoticons'
import { cn } from '../lib/utils'

function Emoticon({
  id,
  alt,
  className,
  ...props
}: Omit<React.ComponentProps<'img'>, 'src'> & {
  id: string
}) {
  const item = emoticonById(id)

  if (!item) {
    throw new Error(`Unknown emoticon: ${id}`)
  }

  return (
    <img
      data-slot="emoticon"
      src={item.src}
      alt={alt ?? item.name}
      width={32}
      height={32}
      className={cn('inline-block shrink-0', className)}
      style={{ imageRendering: 'pixelated', ...props.style }}
      {...props}
    />
  )
}

export { Emoticon }
