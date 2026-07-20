const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: 'Sobre OratorIA',
    links: ['Misión', 'Método RPP', 'Investigación', 'La rúbrica', 'Contáctanos'],
  },
  {
    title: 'Producto',
    links: ['La Sala', 'Modo desafío', 'Reportes', 'Para docentes'],
  },
  {
    title: 'Escenarios',
    links: ['Sustentación de tesis', 'Pitch', 'Exposición en clase'],
  },
  {
    title: 'Ayuda y soporte',
    links: ['Preguntas frecuentes', 'Requisitos técnicos', 'Estado del servicio'],
  },
  {
    title: 'Privacidad',
    links: ['Tu video nunca sale de tu laptop', 'Términos', 'Privacidad (Ley 29733)'],
  },
]

export function Footer() {
  return (
    <footer className="bg-voz pb-10 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 pt-20 md:grid-cols-5">
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="mb-4 font-display text-base font-extrabold text-white">{col.title}</h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#empezar"
                    className="text-sm font-semibold text-white/75 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/25 px-6 pt-6 text-sm font-semibold text-white/70">
        OratorIA — no entrena presentaciones, entrena tu competencia oral.
      </div>
    </footer>
  )
}
