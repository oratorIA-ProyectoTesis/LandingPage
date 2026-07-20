import heroCollage from '../assets/hero-collage.webp'
import { ChunkyButton } from '../components/ui'
import { FlameIcon, HeartIcon, SparkIcon, StarIcon } from '../components/icons'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
      {/* Collage: Vox + La Sala (like Duolingo's character cluster) */}
      <div className="relative mx-auto w-full max-w-md">
        <span className="absolute -top-2 left-2 float-bob" style={{ animationDelay: '.3s' }}>
          <StarIcon size={38} />
        </span>
        <span className="absolute -right-2 top-10 float-bob" style={{ animationDelay: '1.1s' }}>
          <HeartIcon size={34} />
        </span>
        <span className="absolute -left-4 bottom-16 float-bob" style={{ animationDelay: '.7s' }}>
          <FlameIcon size={40} />
        </span>
        <span className="absolute right-6 -bottom-2 float-bob" style={{ animationDelay: '1.6s' }}>
          <SparkIcon size={32} />
        </span>
        <img
          src={heroCollage}
          alt="Vox y La Sala celebrando: el público de OratorIA te recibe"
          width={520}
          height={520}
          className="w-full drop-shadow-[0_18px_30px_rgba(38,32,59,0.15)]"
        />
      </div>

      {/* Headline + CTA — concrete benefit first, adjectives out (critique). */}
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <h1 className="max-w-xl text-4xl font-extrabold text-escenario md:text-5xl">
          Practica ante un público que reacciona a ti.
        </h1>
        <p className="max-w-md text-lg text-escenario/70">
          Una sola corrección a la vez — la que más te ayuda. La forma valiente
          y humana de aprender a hablar en público.
        </p>
        {/* ONE dominant CTA (Unbounce: 13.5% vs 10.5% with 3+). */}
        <ChunkyButton variant="primary" href="#empezar" className="w-full max-w-xs">
          Practicar gratis
        </ChunkyButton>
        {/* Compact trust signals next to the CTA (the rest live in the Why section). */}
        <ul className="flex flex-col gap-2 text-sm font-semibold text-escenario/60 sm:flex-row sm:gap-6">
          <li className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4.5" y="10" width="15" height="10.5" rx="3" fill="#12B8A4" />
              <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="#12B8A4" strokeWidth="2.4" fill="none" />
            </svg>
            Tu video nunca sale de tu laptop
          </li>
          <li className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3 2 8l10 5 10-5-10-5z" fill="#6C5AA6" />
              <path d="M6 10.5V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" fill="none" stroke="#6C5AA6" strokeWidth="2" />
            </svg>
            Método respaldado por la ciencia
          </li>
        </ul>
      </div>
    </section>
  )
}
