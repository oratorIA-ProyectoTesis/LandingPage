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
}

/** Signature 3D "chunky" button (brand board). */
export function ChunkyButton({ variant = 'primary', children, className = '', ...rest }: ChunkyButtonProps) {
  return (
    <button
      type="button"
      className={`inline-block cursor-pointer rounded-2xl px-8 py-3.5 font-display text-sm font-extrabold tracking-widest uppercase transition-transform active:translate-y-1 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
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
