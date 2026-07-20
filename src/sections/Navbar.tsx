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
        {/* "Iniciar sesión" oculto hasta que exista auth real — un enlace que
            promete login y lleva al registro quema confianza. */}
        <ChunkyButton variant="primary" href="#empezar" className="!px-5 !py-2.5 !text-xs">
          Practicar gratis
        </ChunkyButton>
      </nav>
    </header>
  )
}
