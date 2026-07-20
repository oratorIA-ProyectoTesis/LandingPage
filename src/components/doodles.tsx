/**
 * Hand-drawn notebook doodles ("rayones de cuaderno") — static pen scribbles
 * for the practice-paper section. Irregular strokes on purpose: they must
 * look drawn during a boring class, not generated.
 */

interface DoodleProps {
  size?: number
  className?: string
}

/** Wonky hand-drawn star, single pen pass. */
export function DoodleStar({ size = 44, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M24 7 C25 12 26 16 28 19 C32 19 37 19 40 20 C37 23 34 25 31 28 C32 32 34 37 35 40 C31 38 27 35 24 33 C20 35 16 38 13 40 C14 36 16 31 17 28 C14 25 10 22 8 20 C12 19 16 19 20 18 C21 14 23 10 24 7 Z"
        stroke="#FFC24D"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Curly arrow, like pointing at your own note. */
export function DoodleArrow({ size = 56, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path
        d="M8 50 C18 48 28 40 32 30 C35 22 30 16 25 19 C20 22 24 30 32 28 C42 25 48 16 52 10"
        stroke="#FF6A3D"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path d="M46 10 L53 9 L52 17" stroke="#FF6A3D" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Pen spiral, the universal margin scribble. */
export function DoodleSpiral({ size = 44, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path
        d="M25 24 C26 21 30 22 30 25 C30 29 24 30 22 26 C19 21 26 16 31 19 C37 23 34 32 27 33 C18 35 12 26 17 18 C22 11 33 10 39 17"
        stroke="#6C5AA6"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Double scribble circle, like circling an important word. */
export function DoodleCircle({ size = 60, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M32 6 C48 5 58 11 57 20 C56 30 42 35 28 34 C14 33 5 27 7 18 C9 9 24 4 40 7"
        stroke="#12B8A4"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M36 9 C48 10 54 15 53 21 C52 28 40 32 29 30"
        stroke="#12B8A4"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

/** Zigzag stress-test scribble. */
export function DoodleZigzag({ size = 56, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={Math.round(size / 2)} viewBox="0 0 56 28" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 22 L12 8 L19 21 L27 7 L34 22 L42 9 L50 20"
        stroke="#FF5C7A"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Little sun / asterisk strokes. */
export function DoodleSun({ size = 40, className = '' }: DoodleProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true" className={className}>
      <path d="M22 8 L22 15 M22 29 L22 37 M8 22 L15 22 M29 22 L36 22 M12 12 L17 17 M27 27 L32 32 M32 12 L27 17 M17 27 L12 32"
        stroke="#E39A16"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
