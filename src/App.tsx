import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { ScenarioStrip } from './sections/ScenarioStrip'
import { Features } from './sections/Features'
import { Why } from './sections/Why'
import { Anywhere } from './sections/Anywhere'
import { Challenge } from './sections/Challenge'
import { Products } from './sections/Products'
import { Faq } from './sections/Faq'
import { FinalCta } from './sections/FinalCta'
import { Footer } from './sections/Footer'

/**
 * Section order follows the evidence-based canonical anatomy
 * (hero → early trust → features → why/credibility → product → FAQ → final CTA).
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScenarioStrip />
        <Features />
        <Why />
        <Anywhere />
        <Challenge />
        <Products />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
