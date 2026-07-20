import salaPregunta from '../assets/sala-solo-pregunta.webp'

/**
 * FAQ — native <details>/<summary> accordion: zero JS, accessible, mobile-first
 * (NN/g: accordions win on mobile; caret icon signals in-place expansion).
 * No FAQPage schema on purpose — Google deprecated the rich result (2026).
 */
const FAQS = [
  {
    q: '¿Necesito un casco de realidad virtual?',
    a: 'No. OratorIA funciona con tu laptop y tu navegador: cámara y micrófono normales. La audiencia vive en tu pantalla y reacciona a ti en tiempo real.',
  },
  {
    q: '¿Mi video se sube a internet?',
    a: 'No. El análisis de tus gestos y postura ocurre dentro de tu navegador: tu video nunca sale de tu computadora. Solo el audio se procesa de forma segura para transcribir lo que dices.',
  },
  {
    q: '¿Cómo me corrige sin abrumarme?',
    a: 'Ese es el corazón de OratorIA: su modelo pedagógico prioriza. Al cerrar cada segmento recibes UNA corrección — la que más te ayuda ahora — con su porqué, un ejemplo y un ejercicio.',
  },
  {
    q: '¿Sirve para mi sustentación de tesis?',
    a: 'Sí — es nuestro escenario estrella. También puedes practicar exposiciones de clase, pitches y discursos, con la duración que tú definas.',
  },
  {
    q: '¿Qué pasa si me da mucha ansiedad hablar en público?',
    a: 'OratorIA empieza en modo apoyo: una audiencia amable que asiente y te da tiempo. La exigencia sube solo cuando tú estás listo. Practicar en un espacio seguro es exactamente para lo que fue diseñada.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El piloto es gratuito para estudiantes. Solo necesitas tu correo — sin tarjeta de crédito.',
  },
] as const

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <img
        src={salaPregunta}
        alt="Oyente de La Sala levantando la mano con una pregunta"
        width={130}
        height={130}
        loading="lazy"
        className="mx-auto mb-4 w-28 float-bob"
      />
      <p className="mb-3 text-center font-display text-sm font-extrabold tracking-[0.3em] text-voz-deep uppercase">
        Preguntas frecuentes
      </p>
      <h2 className="mb-12 text-center text-4xl font-extrabold text-escenario md:text-5xl">
        Lo que todos preguntan
      </h2>
      <div className="flex flex-col divide-y divide-sala-2 border-y border-sala-2">
        {FAQS.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-escenario [&::-webkit-details-marker]:hidden">
              {q}
              <svg
                className="h-5 w-5 shrink-0 text-voz transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p className="mt-3 max-w-xl leading-relaxed text-escenario/75">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
