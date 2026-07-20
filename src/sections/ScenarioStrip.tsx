import escConcurso from '../assets/esc-concurso.webp'
import escDiscurso from '../assets/esc-discurso.webp'
import escExposicion from '../assets/esc-exposicion.webp'
import escPitch from '../assets/esc-pitch.webp'
import escReunion from '../assets/esc-reunion.webp'
import escSustentacion from '../assets/esc-sustentacion.webp'

const SCENARIOS = [
  { icon: escSustentacion, label: 'Sustentación' },
  { icon: escPitch, label: 'Pitch' },
  { icon: escExposicion, label: 'Exposición' },
  { icon: escConcurso, label: 'Concurso' },
  { icon: escReunion, label: 'Reunión' },
  { icon: escDiscurso, label: 'Discurso' },
] as const

function Items() {
  return (
    <>
      <li className="shrink-0 font-display text-sm font-extrabold tracking-widest text-escenario/40 uppercase">
        Practica para:
      </li>
      {SCENARIOS.map(({ icon, label }) => (
        <li key={label} className="shrink-0">
          <span className="flex items-center gap-2.5 font-display text-sm font-bold tracking-widest text-escenario/50 uppercase transition-colors hover:text-voz">
            <img src={icon} alt="" width={28} height={28} loading="lazy" className="h-7 w-7 object-contain" />
            {label}
          </span>
        </li>
      ))}
    </>
  )
}

/** Scenario strip: infinite marquee on mobile, centered static row on desktop. */
export function ScenarioStrip() {
  return (
    <div className="border-y border-sala-2 bg-sala-2/50">
      {/* Mobile: self-moving marquee (paused on touch; scrollable if reduced motion) */}
      <div className="marquee-wrap overflow-hidden py-4 md:hidden">
        <ul className="marquee-track items-center gap-8 pr-8 [&>li]:ml-8">
          <Items />
          <span aria-hidden="true" className="contents">
            <Items />
          </span>
        </ul>
      </div>

      {/* Desktop: static centered row */}
      <ul className="mx-auto hidden max-w-6xl items-center justify-center gap-8 px-6 py-4 md:flex">
        <Items />
      </ul>
    </div>
  )
}
