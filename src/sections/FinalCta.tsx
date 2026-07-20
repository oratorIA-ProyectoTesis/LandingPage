import voxBase from '../assets/vox-base.webp'
import { ChunkyButton } from '../components/ui'
import { ClapIcon, FlameIcon, HeartIcon, StarIcon, TrophyIcon } from '../components/icons'

/** Final CTA over the coral wave, mascot center (Duolingo's closing section). */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-sala pt-24">
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-escenario md:text-6xl">
          habla. te escuchan.
          <br />
          <span className="text-voz">mejoras.</span>
        </h2>
        {/* Research: email-only form + ONE trust microcopy near the CTA. */}
        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Tu correo
          </label>
          <input
            id="cta-email"
            type="email"
            required
            placeholder="tu@correo.edu.pe"
            className="w-full rounded-2xl border-2 border-sala-2 bg-white px-5 py-3.5 font-semibold text-escenario placeholder:text-escenario/35 focus:border-voz focus:outline-none"
          />
          <ChunkyButton variant="primary" className="shrink-0">
            Empezar gratis
          </ChunkyButton>
        </form>
        <p className="text-sm font-semibold text-escenario/50">
          Sin tarjeta de crédito — solo tu correo.
        </p>
      </div>

      {/* stage: floating rewards + Vox emerging over the wave */}
      <div className="relative mt-10 h-72">
        <span className="absolute left-[14%] top-2 float-bob" style={{ animationDelay: '.4s' }}>
          <TrophyIcon size={52} />
        </span>
        <span className="absolute left-[30%] top-16 float-bob" style={{ animationDelay: '1.2s' }}>
          <HeartIcon size={38} />
        </span>
        <span className="absolute right-[28%] top-8 float-bob" style={{ animationDelay: '.8s' }}>
          <FlameIcon size={48} />
        </span>
        <span className="absolute right-[12%] top-24 float-bob" style={{ animationDelay: '1.7s' }}>
          <ClapIcon size={44} />
        </span>
        <span className="absolute left-[46%] top-4 float-bob" style={{ animationDelay: '.1s' }}>
          <StarIcon size={36} />
        </span>

        <img
          src={voxBase}
          alt="Vox te espera en el escenario"
          width={210}
          height={210}
          loading="lazy"
          className="absolute bottom-0 left-1/2 z-10 w-44 -translate-x-1/2 md:w-52"
        />

        {/* coral wave into the footer */}
        <svg
          className="absolute bottom-0 left-1/2 h-40 w-[110vw] -translate-x-1/2"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 90 C 240 20 480 20 720 80 C 960 140 1200 140 1440 70 L1440 200 L0 200 Z"
            fill="#FF6A3D"
          />
        </svg>
      </div>
    </section>
  )
}
