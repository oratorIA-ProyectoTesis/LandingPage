import productoInvestigacion from '../assets/producto-investigacion.webp'
import { ChunkyButton, Wave } from '../components/ui'

/**
 * "Why OratorIA" — institutional credibility narrative (Blackboard pattern).
 * Evidence grid is STATIC — auto-carousels are a documented anti-pattern
 * (NN/g banner blindness).
 */
const EVIDENCE = [
  {
    tag: 'Modelo propio',
    title: 'Retroalimentación Pedagógica Priorizada',
    detail: 'Un motor que decide qué corregir primero — no un chatbot improvisando.',
  },
  {
    tag: 'Ciencia del feedback',
    title: 'Menos es más, demostrado',
    detail: 'El feedback exhaustivo abruma; el priorizado enseña. Base: 50+ años de investigación.',
  },
  {
    tag: 'Audiencias virtuales',
    title: 'Practicar ante público funciona',
    detail: 'La línea Cicero (2013→2022) demuestra efectos reales sin casco de realidad virtual.',
  },
  {
    tag: 'Validación',
    title: 'Experimento real con estudiantes',
    detail: 'OratorIA se valida con un estudio A/B y una rúbrica evaluada por expertos.',
  },
] as const

export function Why() {
  return (
    <section className="bg-escenario">
      {/* organic transition from the cream section above */}
      <Wave color="var(--color-sala)" />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 grid items-center gap-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 font-display text-sm font-extrabold tracking-[0.3em] text-desafio uppercase">
              ¿Por qué OratorIA?
            </p>
            <h2 className="mb-6 max-w-2xl text-4xl font-extrabold text-white md:text-5xl">
              No adivinamos cómo se enseña a hablar. Lo investigamos.
            </h2>
            <p className="max-w-2xl text-lg text-white/70">
              OratorIA nace de una tesis de Ingeniería de Software: cada decisión
              del producto — qué corregir, cuándo callar, cómo reacciona tu
              público — está respaldada por evidencia publicada, no por
              ocurrencias.
            </p>
          </div>
          <img
            src={productoInvestigacion}
            alt="Vox graduado con diploma, libro y lupa: la investigación detrás de OratorIA"
            width={280}
            height={280}
            loading="lazy"
            className="mx-auto w-56 drop-shadow-[0_18px_30px_rgba(0,0,0,0.4)] md:w-64"
          />
        </div>

        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EVIDENCE.map(({ tag, title, detail }) => (
            <article key={title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="mb-2 font-display text-xs font-extrabold tracking-widest text-apoyo uppercase">
                {tag}
              </p>
              <h3 className="mb-2 font-display text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{detail}</p>
            </article>
          ))}
        </div>

        <ChunkyButton variant="primary" href="#empezar">Practicar gratis</ChunkyButton>
      </div>
      {/* organic transition into the warm section below */}
      <Wave color="var(--color-sala-2)" flip />
    </section>
  )
}
