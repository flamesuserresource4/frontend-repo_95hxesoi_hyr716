import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Studio from './components/Studio'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Projects />
      <Studio />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
