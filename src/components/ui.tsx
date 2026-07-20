import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ChunkyVariant = 'primary' | 'ghost' | 'white' | 'dark'

const variants: Record<ChunkyVariant, string> = {
  primary:
    'bg-voz text-white shadow-[0_5px_0_var(--color-voz-deep)] active:shadow-[0_1px_0_var(--color-voz-deep)]',
  ghost:
    'bg-white text-uva border-2 border-sala-2 shadow-[0_5px_0_var(--color-sala-2)] active:shadow-[0_1px_0_var(--color-sala-2)]',
  white:
    'bg-white text-voz shadow-[0_5px_0_rgba(0,0,0,0.15)] active:shadow-[0_1px_0_rgba(0,0,0,0.15)]',
  dark:
    'bg-escenario text-white shadow-[0_5px_0_rgba(0,0,0,0.4)] active:shadow-[0_1px_0_rgba(0,0,0,0.4)]',
}

interface ChunkyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ChunkyVariant
  children: ReactNode
  /** Renders as an anchor when provided (CTA wiring). */
  href?: string
}

/** Signature 3D "chunky" button (brand board). */
export function ChunkyButton({ variant = 'primary', children, className = '', href, ...rest }: ChunkyButtonProps) {
  const cls = `inline-block cursor-pointer rounded-2xl px-8 py-3.5 text-center font-display text-sm font-extrabold tracking-widest uppercase transition-transform active:translate-y-1 ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

/**
 * Organic wave divider between sections (Duolingo-style transitions).
 * Place at the TOP of a section filled with the PREVIOUS section's color,
 * or flipped at the BOTTOM filled with the NEXT section's color.
 */
export function Wave({
  color,
  flip = false,
  className = '',
}: {
  color: string
  flip?: boolean
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-14 w-full md:h-24 ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <path
        d="M0 52 C 200 92 420 8 720 42 C 1020 76 1240 14 1440 48 L1440 0 L0 0 Z"
        fill={color}
      />
    </svg>
  )
}

/** Slot for an illustration that is not generated yet (see SVGS-NECESARIOS.md). */
export function IllustrationSlot({ name, ratio = 'aspect-square' }: { name: string; ratio?: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-3xl border-2 border-dashed border-voz/30 bg-voz-soft/40 ${ratio}`}
      role="img"
      aria-label={`Ilustración pendiente: ${name}`}
    >
      <span className="px-4 text-center font-display text-sm font-bold text-voz-deep/60">
        {name}
        <br />
        <span className="text-xs font-semibold opacity-70">(ver SVGS-NECESARIOS.md)</span>
      </span>
    </div>
  )
}
