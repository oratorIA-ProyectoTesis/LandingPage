import productoDocentes from '../assets/producto-docentes.webp'
import { ChunkyButton } from '../components/ui'

/** Secondary product section — B2B educators. (The research story lives in Why.) */
export function Products() {
  return (
    <section className="mx-auto px-6 py-24">
      <article className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="mb-4 max-w-md text-4xl font-extrabold text-voz md:text-5xl">
            oratorIA para docentes
          </h2>
          <p className="mb-6 max-w-md text-lg leading-relaxed text-escenario/60">
            Profesoras y profesores: sus estudiantes practican la sustentación
            antes de la sustentación. Asigna escenarios, sigue el progreso por
            dimensión y llega al día D con menos nervios en el aula.
          </p>
          <ChunkyButton variant="ghost">Próximamente</ChunkyButton>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <img
            src={productoDocentes}
            alt="Docente mostrando el panel de progreso de su clase"
            width={470}
            height={470}
            loading="lazy"
            className="w-full drop-shadow-[0_14px_24px_rgba(38,32,59,0.12)]"
          />
        </div>
      </article>
    </section>
  )
}
