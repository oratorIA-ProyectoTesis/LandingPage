import { useState } from 'react'
import { LogoMark } from '../components/icons'
import { ChunkyButton } from '../components/ui'

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#metodo', label: 'El método' },
  { href: '#docentes', label: 'Docentes' },
  { href: '#preguntas', label: 'Preguntas' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sala-2 bg-sala/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2" aria-label="OratorIA — inicio">
          <LogoMark size={36} />
          <span className="font-display text-2xl font-extrabold text-escenario">
            Orator<span className="text-voz">IA</span>
          </span>
        </a>

        {/* Desktop section links */}
        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-display text-sm font-bold tracking-wide text-escenario/70 transition-colors hover:text-voz"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ChunkyButton
            variant="primary"
            href="#empezar"
            className="shrink-0 !px-4 !py-2.5 !text-xs sm:!px-5"
          >
            Practicar gratis
          </ChunkyButton>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border-2 border-sala-2 bg-white md:hidden"
          >
            <span
              className={`h-[2.5px] w-5 rounded-full bg-escenario transition-transform duration-200 ${open ? 'translate-y-[7.5px] rotate-45' : ''}`}
            />
            <span
              className={`h-[2.5px] w-5 rounded-full bg-escenario transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-[2.5px] w-5 rounded-full bg-escenario transition-transform duration-200 ${open ? '-translate-y-[7.5px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {open && (
        <div id="menu-movil" className="border-t border-sala-2 bg-sala md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-sala-2 py-3.5 font-display text-base font-bold text-escenario/80 transition-colors last:border-0 hover:text-voz"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
