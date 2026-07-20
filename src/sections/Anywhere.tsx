import { ChunkyButton } from '../components/ui'
import { ClapIcon, FlameIcon, HeartIcon, SparkIcon, StarIcon, TrophyIcon } from '../components/icons'

/** Full-bleed section: practice anywhere, no special hardware (Duolingo's blue section). */
export function Anywhere() {
  return (
    <section className="relative overflow-hidden bg-sala-2 py-28">
      {/* practice-paper grid texture */}
      <div aria-hidden="true" className="grid-paper" />
      {/* floating brand objects */}
      <span className="absolute left-[8%] top-12 float-bob" style={{ animationDelay: '.2s' }}>
        <FlameIcon size={46} />
      </span>
      <span className="absolute right-[10%] top-16 float-bob" style={{ animationDelay: '.9s' }}>
        <TrophyIcon size={48} />
      </span>
      <span className="absolute left-[16%] bottom-14 float-bob" style={{ animationDelay: '1.4s' }}>
        <ClapIcon size={42} />
      </span>
      <span className="absolute right-[18%] bottom-10 float-bob" style={{ animationDelay: '.5s' }}>
        <HeartIcon size={38} />
      </span>
      <span className="absolute left-[38%] bottom-4 float-bob" style={{ animationDelay: '1.9s' }}>
        <StarIcon size={34} />
      </span>
      <span className="absolute right-[36%] top-6 float-bob" style={{ animationDelay: '1.1s' }}>
        <SparkIcon size={30} />
      </span>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-escenario md:text-6xl">
          practica cuando quieras, sin miedo
        </h2>
        <p className="max-w-xl text-lg text-escenario/60">
          Solo necesitas tu laptop y tu navegador. Sin casco de realidad
          virtual, sin instalar nada, sin público real que te juzgue — tu video
          nunca sale de tu computadora.
        </p>
        <ChunkyButton variant="primary" href="#empezar">Practicar gratis</ChunkyButton>
      </div>
    </section>
  )
}
