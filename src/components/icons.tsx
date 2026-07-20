/**
 * Two-tone brand icons (from the brand board). Temporary inline versions —
 * they get replaced by generated SVG assets listed in SVGS-NECESARIOS.md.
 */

import logoTile from '../assets/logo-tile.webp'

/** Official "Mic que Sube" brand mark — the real generated tile (transparent corners). */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logoTile}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      style={{ display: 'block' }}
    />
  )
}

/** Alias kept for larger placements (footers, cards). */
export const LogoTile = LogoMark

export function FlameIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 12 C40 24 52 28 52 42 a20 20 0 0 1-40 0 C12 32 17 27 22 23 C22 31 27 33 29 28 C31 22 27 18 32 12Z" fill="#E39A16" />
      <path d="M32 8 C40 20 50 25 50 40 a18 18 0 0 1-36 0 C14 30 19 25 24 21 C24 29 28 31 30 26 C32 20 28 15 32 8Z" fill="#FFC24D" />
      <path d="M32 28 C36 34 42 37 42 45 a10 10 0 0 1-20 0 C22 39 27 37 30 30 C31 28 31 28 32 28Z" fill="#FF6A3D" />
      <path d="M32 40 C34 43 37 44 37 48 a5 5 0 0 1-10 0 C27 45 30 44 32 40Z" fill="#FFD9CC" />
    </svg>
  )
}

export function HeartIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 42S6 30 6 17.5A9.5 9.5 0 0 1 24 12a9.5 9.5 0 0 1 18 5.5C42 30 24 42 24 42z" fill="#FF5C7A" />
    </svg>
  )
}

export function StarIcon({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 5l5.5 11.5L42 18l-9 8.7L35 39l-11-6-11 6 2-12.3L6 18l12.5-1.5z" fill="#FFC24D" />
    </svg>
  )
}

export function ClapIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="18" fill="#12B8A4" />
      <path d="M17 24l5 5 10-11" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SparkIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 6c2 8 8 14 16 16-8 2-14 8-16 16-2-8-8-14-16-16 8-2 14-8 16-16z" fill="#6C5AA6" />
    </svg>
  )
}

export function TrophyIcon({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="22" y="50" width="20" height="8" rx="3" fill="#574A86" />
      <rect x="22" y="49" width="20" height="7" rx="3" fill="#6C5AA6" />
      <rect x="27" y="42" width="10" height="9" fill="#574A86" />
      <rect x="27" y="41" width="10" height="9" fill="#6C5AA6" />
      <path d="M20 15 Q8 15 10 28 Q11 35 20 33 L20 28 Q15 29 15 24 Q14 19 20 19 Z" fill="#D9431C" />
      <path d="M44 15 Q56 15 54 28 Q53 35 44 33 L44 28 Q49 29 49 24 Q50 19 44 19 Z" fill="#D9431C" />
      <path d="M18 10 H46 V23 Q46 39 32 42 Q18 39 18 23 Z" fill="#D9431C" />
      <path d="M18 10 H44 V23 Q44 38 32 41 Q18 38 18 23 Z" fill="#FF6A3D" />
      <path d="M32 17 l2.6 5.3 5.8 .8 -4.2 4.1 1 5.8 -5.2-2.7 -5.2 2.7 1-5.8 -4.2-4.1 5.8-.8Z" fill="#FFC24D" />
    </svg>
  )
}
