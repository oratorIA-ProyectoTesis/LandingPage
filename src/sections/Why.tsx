import productoInvestigacion from '../assets/producto-investigacion.webp'
import { Lively } from '../components/Lively'
import { ChunkyButton, Wave } from '../components/ui'

/**
 * "Why OratorIA" — institutional credibility narrative (Blackboard pattern).
 * Evidence grid is STATIC — auto-carousels are a documented anti-pattern
 * (NN/g banner blindness).
 */
/**
 * Evidence as handmade paper notes taped to the dark stage wall — identical
 * clone-cards in a row are the #1 "AI slop" tell; variation kills it.
 */
const EVIDENCE = [
  {
    tag: 'Modelo propio',
    title: 'Retroalimentación Pedagógica Priorizada',
    detail: 'Un motor que decide qué corregir primero — no un chatbot improvisando.',
    tilt: '-rotate-2',
    tagBg: 'bg-apoyo',
    tape: 'rgba(18,184,164,0.8)',
    tapeTilt: '-5deg',
  },
  {
    tag: 'Ciencia del feedback',
    title: 'Menos es más, demostrado',
    detail: 'El feedback exhaustivo abruma; el priorizado enseña. Base: 50+ años de investigación.',
    tilt: 'rotate-1 md:translate-y-3',
    tagBg: 'bg-desafio-deep',
    tape: 'rgba(255,194,77,0.85)',
    tapeTilt: '4deg',
  },
  {
    tag: 'Audiencias virtuales',
    title: 'Practicar ante público funciona',
    detail: 'La línea Cicero (2013→2022) demuestra efectos reales sin casco de realidad virtual.',
    tilt: '-rotate-1 md:-translate-y-2',
    tagBg: 'bg-uva',
    tape: 'rgba(108,90,166,0.8)',
    tapeTilt: '-3deg',
  },
  {
    tag: 'Validación',
    title: 'Probado con estudiantes reales',
    detail: 'Tu avance se mide con una rúbrica evaluada por expertos — resultados que puedes ver, no promesas.',
    tilt: 'rotate-2 md:translate-y-2',
    tagBg: 'bg-voz',
    tape: 'rgba(255,106,61,0.8)',
    tapeTilt: '5deg',
  },
] as const

export function Why() {
  return (
    <section id="metodo" className="scroll-mt-20 bg-escenario">
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
              Cada decisión de OratorIA — qué corregir primero, cuándo callar,
              cómo reacciona tu público — está construida sobre más de 50 años
              de ciencia del aprendizaje. Otros te dan consejos genéricos;
              nosotros te damos un método que funciona.
            </p>
          </div>
          <Lively className="mx-auto">
            <img
              src={productoInvestigacion}
              alt="Vox graduado con diploma, libro y lupa: la ciencia detrás de OratorIA"
              width={280}
              height={280}
              loading="lazy"
              className="w-56 drop-shadow-[0_18px_30px_rgba(0,0,0,0.4)] md:w-64"
            />
          </Lively>
        </div>

        <div className="mb-14 grid gap-7 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVIDENCE.map(({ tag, title, detail, tilt, tagBg, tape, tapeTilt }) => (
            <article
              key={title}
              className={`relative rounded-[14px_18px_12px_20px] bg-sala p-6 pt-7 shadow-[8px_8px_0_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-[12px_12px_0_rgba(0,0,0,0.45)] ${tilt}`}
            >
              {/* tape holding the note to the stage wall */}
              <span
                aria-hidden="true"
                className="tape"
                style={{ '--tape-color': tape, '--tape-tilt': tapeTilt } as React.CSSProperties}
              />
              {/* hand-drawn inner frame */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-2.5 rounded-[10px_14px_9px_15px] border-2 border-dashed border-escenario/15"
              />
              <p
                className={`mb-3 inline-block rounded-full ${tagBg} px-3 py-1 font-display text-[11px] font-extrabold tracking-widest text-white uppercase shadow-[2px_2px_0_rgba(0,0,0,0.3)]`}
              >
                {tag}
              </p>
              <h3 className="mb-2 font-display text-lg leading-snug font-bold text-escenario">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-escenario/70">{detail}</p>
            </article>
          ))}
        </div>

        <ChunkyButton variant="glow" href="#empezar">Practicar gratis</ChunkyButton>
      </div>
      {/* the Anywhere section below owns the boundary wave */}
    </section>
  )
}
