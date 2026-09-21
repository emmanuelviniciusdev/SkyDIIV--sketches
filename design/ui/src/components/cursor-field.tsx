'use client'

import * as React from 'react'

import { cn } from '../lib/utils'

const TRAIL_THROTTLE_MS = 45
const TRAIL_LIFE_MS = 700

function CursorField({ className, ...props }: React.ComponentProps<'div'>) {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const lastTimeRef = React.useRef(0)

  React.useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const spawnPlus = (x: number, y: number) => {
      const mark = document.createElement('span')
      mark.textContent = '+'
      mark.className = 'cursor-plus'
      mark.setAttribute('aria-hidden', 'true')

      const offsetX = (Math.random() - 0.5) * 14
      const offsetY = (Math.random() - 0.5) * 14
      const size = 10 + Math.random() * 6

      mark.style.left = `${x + offsetX}px`
      mark.style.top = `${y + offsetY}px`
      mark.style.fontSize = `${size}px`

      root.appendChild(mark)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mark.classList.add('cursor-plus--leaving')
        })
      })

      window.setTimeout(() => mark.remove(), TRAIL_LIFE_MS)
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (reducedMotion.matches) return

      const now = performance.now()
      if (now - lastTimeRef.current < TRAIL_THROTTLE_MS) return
      lastTimeRef.current = now

      const rect = root.getBoundingClientRect()
      spawnPlus(event.clientX - rect.left, event.clientY - rect.top)
    }

    root.addEventListener('mousemove', handleMouseMove)
    return () => root.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={rootRef}
      data-slot="cursor-field"
      className={cn('cursor-field', className)}
      {...props}
    />
  )
}

export { CursorField }
