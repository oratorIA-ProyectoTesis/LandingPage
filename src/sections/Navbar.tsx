import { LogoMark } from '../components/icons'
import { ChunkyButton } from '../components/ui'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sala-2 bg-sala/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2" aria-label="OratorIA — inicio">
          <LogoMark size={36} />
          <span className="font-display text-2xl font-extrabold text-escenario">
            Orator<span className="text-voz">IA</span>
          </span>
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#empezar"
            className="hidden font-display text-sm font-bold tracking-widest text-uva uppercase transition-colors hover:text-voz sm:block"
          >
            Iniciar sesión
          </a>
          <ChunkyButton variant="primary" className="!px-5 !py-2.5 !text-xs">
            Practicar gratis
          </ChunkyButton>
        </div>
      </nav>
    </header>
  )
}
