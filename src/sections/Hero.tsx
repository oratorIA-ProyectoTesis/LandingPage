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
      </div>
    </section>
  )
}
