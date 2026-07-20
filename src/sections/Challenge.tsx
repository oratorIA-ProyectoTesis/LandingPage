import desafioVox from '../assets/desafio-vox.webp'
import { ChunkyButton, Wave } from '../components/ui'

/**
 * Dark "stage" section — Modo Desafío (Duolingo's Super section).
 * Background #17112C sampled from the desafio-vox artwork so the image
 * melts into the section with no visible card edge.
 */
export function Challenge() {
  return (
    <section className="relative overflow-hidden bg-[#17112C]">
      {/* organic transition from the warm section above */}
      <Wave color="var(--color-sala-2)" className="relative z-10" />
      {/* warm spotlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, #FF6A3D 0%, transparent 65%)' }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="mx-auto w-full max-w-sm">
          {/* Dark scene blends with the section background on purpose. */}
          <img
            src={desafioVox}
            alt="Vox en el escenario, bajo el spotlight, frente a un público exigente"
            width={470}
            height={470}
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
          <p className="font-display text-sm font-extrabold tracking-[0.3em] text-desafio uppercase">
            Sube al escenario con
          </p>
          <h2 className="font-display text-5xl font-extrabold text-white md:text-6xl">
            MODO <span className="text-desafio">DESAFÍO</span>
          </h2>
          <p className="max-w-md text-lg text-white/70">
            Cuando estés listo, tu público sube la exigencia: preguntas
            difíciles, miradas firmes y menos tiempo. Entrena bajo presión —
            para que el día real se sienta fácil.
          </p>
          <ChunkyButton variant="white" href="#empezar">Probar el modo desafío</ChunkyButton>
        </div>
      </div>
      {/* organic transition into the cream section below */}
      <Wave color="var(--color-sala)" flip className="relative z-10" />
    </section>
  )
}
