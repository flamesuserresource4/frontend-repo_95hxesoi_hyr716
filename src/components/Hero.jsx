import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-40 md:pb-40">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-zinc-300/70 mb-4">Architectuur • Stedenbouw • Interieur</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Ruimtes ontwerpen voor mensen, prestaties en mogelijkheden.
          </h1>
          <p className="mt-6 text-zinc-300 max-w-xl">
            OTH_ is een architectenbureau dat toekomstbestendige werkplekken en publieke ruimtes ontwerpt. We verbinden onderzoek, duurzaamheid en identiteit tot omgevingen die lang meegaan.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#work" className="px-5 py-2.5 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">Bekijk werk</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">Start een project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
