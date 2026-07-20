import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Brings an illustration to life: playful pop-in when it scrolls into view,
 * then a gentle perpetual sway. CSS-only motion, reduced-motion aware.
 */
export function Lively({
  children,
  className = '',
  delay = 0,
  sway = true,
  motion,
}: {
  children: ReactNode
  className?: string
  /** Entrance delay in ms (stagger siblings). */
  delay?: number
  /** Keep the idle sway after entering. */
  sway?: boolean
  /** Override idle motion with a character-coherent one (e.g. 'anim-hop'). */
  motion?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${seen ? 'anim-pop' : 'anim-wait'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {motion ? (
        <div className={motion}>{children}</div>
      ) : sway ? (
        <div className="idle-sway">{children}</div>
      ) : (
        children
      )}
    </div>
  )
}
