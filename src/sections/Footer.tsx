const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Sobre OratorIA',
    links: [
      { label: 'Misión', href: '#metodo' },
      { label: 'Método RPP', href: '#metodo' },
      { label: 'Investigación', href: '#metodo' },
      { label: 'Cómo funciona', href: '#como-funciona' },
    ],
  },
  {
    title: 'Producto',
    links: [
      { label: 'La Sala', href: '#como-funciona' },
      { label: 'Modo desafío', href: '#metodo' },
      { label: 'Para docentes', href: '#docentes' },
    ],
  },
  {
    title: 'Escenarios',
    links: [
      { label: 'Sustentación de tesis', href: '#empezar' },
      { label: 'Pitch', href: '#empezar' },
      { label: 'Exposición en clase', href: '#empezar' },
    ],
  },
  {
    title: 'Ayuda y soporte',
    links: [
      { label: 'Preguntas frecuentes', href: '#preguntas' },
      { label: 'Empezar gratis', href: '#empezar' },
    ],
  },
  {
    title: 'Privacidad',
    links: [{ label: 'Tu video nunca sale de tu laptop', href: '#preguntas' }],
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
              {col.links.map(({ label, href }) => (
                <li key={label}>
                  {/* Brand rule: ink text over coral (AA contrast) */}
                  <a
                    href={href}
                    className="text-sm font-bold text-escenario/80 transition-colors hover:text-escenario"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-escenario/20 px-6 pt-6 text-sm font-bold text-escenario/80">
        OratorIA — no entrena presentaciones, entrena tu competencia oral.
      </div>
    </footer>
  )
}
