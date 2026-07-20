import featureCiencia from '../assets/feature-ciencia.webp'
import featureProgreso from '../assets/feature-progreso.webp'
import featureRpp from '../assets/feature-rpp.webp'
import salaAlentador from '../assets/sala-solo-alentador.webp'
import salaAtento from '../assets/sala-solo-atento.webp'
import salaExigente from '../assets/sala-solo-exigente.webp'
import salaPregunta from '../assets/sala-solo-pregunta.webp'

/**
 * The audience illustration is COMPOSED from the four clean individual
 * listeners (the grouped render had baked-in glow smoke) — more control,
 * subtle motion, and each character stays pristine.
 */
function AudienceGrid() {
  const listeners = [
    { src: salaAlentador, alt: 'Oyente alentador (teal) sonriendo', tilt: '-rotate-3', delay: '.2s' },
    { src: salaAtento, alt: 'Oyente atento (uva) escuchando', tilt: 'rotate-2', delay: '.9s' },
    { src: salaExigente, alt: 'Oyente exigente (ámbar) con mirada firme', tilt: 'rotate-3', delay: '1.5s' },
    { src: salaPregunta, alt: 'Oyente con una pregunta levantando la mano', tilt: '-rotate-2', delay: '.5s' },
  ]
  return (
    <div className="grid grid-cols-2 gap-5">
      {listeners.map(({ src, alt, tilt, delay }) => (
        <img
          key={alt}
          src={src}
          alt={alt}
          width={200}
          height={214}
          loading="lazy"
          className={`w-full max-w-[200px] float-bob drop-shadow-[0_12px_18px_rgba(38,32,59,0.14)] ${tilt}`}
          style={{ animationDelay: delay }}
        />
      ))}
    </div>
  )
}

interface Feature {
  title: string
  body: string
  image?: { src: string; alt: string }
  custom?: 'audience'
}

const FEATURES: Feature[] = [
  {
    title: 'un público que reacciona a ti',
    body: 'Nada de hablarle al espejo. La Sala te escucha en vivo: asiente, se interesa o levanta la mano — en menos de medio segundo. Tu público deja de ser tu miedo y se vuelve tu entrenador.',
    custom: 'audience',
  },
  {
    title: 'respaldado por la ciencia',
    body: 'OratorIA no inventa consejos: su modelo pedagógico decide qué corregir primero según evidencia. Cada sesión mide tu competencia oral con una rúbrica validada — voz, cuerpo, ritmo y contenido.',
    image: { src: featureCiencia, alt: 'Vox científico con lupa revisando una rúbrica con gráficos' },
  },
  {
    title: 'una sola corrección a la vez',
    body: 'Veinte correcciones juntas no enseñan: abruman. Al cerrar cada segmento recibes solo la que más te ayuda, con su porqué, un ejemplo y un ejercicio. Así se construye una habilidad de verdad.',
    image: { src: featureRpp, alt: 'Tarjeta de feedback con una corrección prioritaria destacada' },
  },
  {
    title: 'progreso que engancha',
    body: 'Rachas, aplausos y niveles por dimensión: practicar da ganas, no miedo. Y cuando estés listo, activa el modo desafío para que tu público suba la exigencia contigo.',
    image: { src: featureProgreso, alt: 'Vox celebrando con racha, trofeo y niveles subiendo' },
  },
]

/** Alternating zigzag feature sections (Duolingo style). */
export function Features() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-24">
      {FEATURES.map((feature, i) => (
        <article
          key={feature.title}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
        >
          <div className={`mx-auto w-full max-w-sm ${i % 2 === 1 ? 'md:order-2' : ''}`}>
            {feature.custom === 'audience' ? (
              <AudienceGrid />
            ) : feature.image ? (
              <img
                src={feature.image.src}
                alt={feature.image.alt}
                width={470}
                height={470}
                loading="lazy"
                className="w-full drop-shadow-[0_14px_24px_rgba(38,32,59,0.12)]"
              />
            ) : null}
          </div>
          <div className={i % 2 === 1 ? 'md:order-1' : ''}>
            <h2 className="mb-4 max-w-md text-4xl font-extrabold text-voz md:text-5xl">
              {feature.title}
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-escenario/60">{feature.body}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
