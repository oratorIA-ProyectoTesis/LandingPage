import { ClapIcon, LogoMark, SparkIcon, TrophyIcon } from '../components/icons'

/**
 * Early social-proof strip (research: institutional trust signals must appear
 * within seconds). Claims are HONEST and verifiable — no fake counters (FTC
 * dark-patterns report, 2022).
 */
const SIGNALS = [
  { icon: <TrophyIcon size={30} />, text: 'Nacido de una investigación universitaria' },
  { icon: <SparkIcon size={28} />, text: 'Audiencia que reacciona en menos de 0.5 s' },
  { icon: <ClapIcon size={28} />, text: 'Rúbrica de competencia oral validada' },
  { icon: <LogoMark size={28} />, text: 'Tu video nunca sale de tu laptop' },
] as const

export function TrustStrip() {
  return (
    <section aria-label="Señales de confianza" className="bg-sala-2">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {SIGNALS.map(({ icon, text }) => (
          <li key={text} className="flex items-center gap-3">
            <span aria-hidden="true">{icon}</span>
            <span className="text-sm font-bold text-escenario/70">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
