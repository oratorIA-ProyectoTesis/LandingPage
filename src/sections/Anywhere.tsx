import { ChunkyButton, Wave } from '../components/ui'
import { ClapIcon, FlameIcon, HeartIcon, SparkIcon, StarIcon, TrophyIcon } from '../components/icons'

/**
 * Full-bleed section: practice anywhere, no special hardware.
 * This section OWNS its boundary waves (dark crescents painted over its own
 * cream+grid background) so the paper texture reaches every cream pixel.
 */
export function Anywhere() {
  return (
    <section className="relative overflow-hidden bg-sala-2">
      {/* practice-paper grid texture under everything cream */}
      <div aria-hidden="true" className="grid-paper" />

      {/* dark crescent from the Why section above */}
      <Wave color="var(--color-escenario)" className="relative z-10" />

      <div className="relative py-16">
        {/* floating brand objects */}
        <span className="absolute left-[8%] top-2 float-bob" style={{ animationDelay: '.2s' }}>
          <FlameIcon size={46} />
        </span>
        <span className="absolute right-[10%] top-6 float-bob" style={{ animationDelay: '.9s' }}>
          <TrophyIcon size={48} />
        </span>
        <span className="absolute left-[16%] bottom-4 float-bob" style={{ animationDelay: '1.4s' }}>
          <ClapIcon size={42} />
        </span>
        <span className="absolute right-[18%] bottom-2 float-bob" style={{ animationDelay: '.5s' }}>
          <HeartIcon size={38} />
        </span>
        <span className="absolute left-[38%] -bottom-2 float-bob" style={{ animationDelay: '1.9s' }}>
          <StarIcon size={34} />
        </span>
        <span className="absolute right-[36%] -top-2 float-bob" style={{ animationDelay: '1.1s' }}>
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
      </div>

      {/* dark crescent into the Challenge stage below (#17112C = its sampled bg) */}
      <Wave color="#17112C" flip className="relative z-10" />
    </section>
  )
}
