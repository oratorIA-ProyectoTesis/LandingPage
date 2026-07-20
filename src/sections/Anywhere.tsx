import { ChunkyButton, Wave } from '../components/ui'
import {
  DoodleArrow,
  DoodleCircle,
  DoodleSpiral,
  DoodleStar,
  DoodleSun,
  DoodleZigzag,
} from '../components/doodles'

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
        {/* static pen doodles — margin scribbles on the notebook page */}
        <span className="absolute left-[7%] top-4 hidden -rotate-12 opacity-70 sm:block">
          <DoodleSpiral />
        </span>
        <span className="absolute right-[8%] top-8 hidden rotate-6 opacity-70 sm:block">
          <DoodleStar />
        </span>
        <span className="absolute left-[13%] bottom-8 hidden rotate-3 opacity-70 sm:block">
          <DoodleArrow />
        </span>
        <span className="absolute right-[14%] bottom-6 hidden -rotate-6 opacity-70 sm:block">
          <DoodleZigzag />
        </span>
        <span className="absolute left-[30%] -top-1 hidden rotate-12 opacity-60 lg:block">
          <DoodleSun size={34} />
        </span>
        <span className="absolute right-[28%] -bottom-3 hidden -rotate-3 opacity-70 lg:block">
          <DoodleCircle />
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
