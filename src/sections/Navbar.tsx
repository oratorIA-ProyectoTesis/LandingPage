import { LogoMark } from '../components/icons'
import { ChunkyButton } from '../components/ui'

const LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#metodo', label: 'El método' },
  { href: '#docentes', label: 'Docentes' },
  { href: '#preguntas', label: 'Preguntas' },
] as const

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sala-2 bg-sala/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2" aria-label="OratorIA — inicio">
          <LogoMark size={36} />
          <span className="font-display text-2xl font-extrabold text-escenario">
            Orator<span className="text-voz">IA</span>
          </span>
        </a>

        {/* Section links — hidden on small screens */}
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

        <ChunkyButton variant="primary" href="#empezar" className="shrink-0 !px-5 !py-2.5 !text-xs">
          Practicar gratis
        </ChunkyButton>
      </nav>
    </header>
  )
}
