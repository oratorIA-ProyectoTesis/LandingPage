import escConcurso from '../assets/esc-concurso.webp'
import escDiscurso from '../assets/esc-discurso.webp'
import escExposicion from '../assets/esc-exposicion.webp'
import escPitch from '../assets/esc-pitch.webp'
import escReunion from '../assets/esc-reunion.webp'
import escSustentacion from '../assets/esc-sustentacion.webp'

const SCENARIOS = [
  { icon: escSustentacion, emoji: null, label: 'Sustentación' },
  { icon: escPitch, emoji: null, label: 'Pitch' },
  { icon: escExposicion, emoji: null, label: 'Exposición' },
  { icon: escConcurso, emoji: null, label: 'Concurso' },
  { icon: escReunion, emoji: null, label: 'Reunión' },
  { icon: escDiscurso, emoji: null, label: 'Discurso' },
] as const

/** Horizontal strip of practice scenarios (Duolingo's language strip). */
export function ScenarioStrip() {
  return (
    <div className="border-y border-sala-2 bg-sala">
      <ul className="no-scrollbar mx-auto flex max-w-6xl snap-x items-center gap-8 overflow-x-auto px-6 py-4 md:justify-center">
        {SCENARIOS.map(({ icon, emoji, label }) => (
          <li key={label} className="shrink-0">
            <span className="flex items-center gap-2.5 font-display text-sm font-bold tracking-widest text-escenario/50 uppercase transition-colors hover:text-voz">
              {icon ? (
                <img src={icon} alt="" width={28} height={28} loading="lazy" className="h-7 w-7 object-contain" />
              ) : (
                <span aria-hidden="true">{emoji}</span>
              )}
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
