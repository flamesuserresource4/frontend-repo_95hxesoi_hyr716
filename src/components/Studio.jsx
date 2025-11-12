export default function Studio() {
  return (
    <section id="studio" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Aanpak</h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Wij geloven dat architectuur genereus, adaptief en geworteld in context moet zijn. Onze werkwijze combineert strategie en vakmanschap, zodat elk project presteert voor zijn gebruikers en positief bijdraagt aan de omgeving.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-700">
            <li>— Circulair ontwerp en laagcarbon-materialen</li>
            <li>— Workplace-strategie en verandermanagement</li>
            <li>— Geïntegreerd interieur en merkbeleving</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MjkyMTc1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 mt-8">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW98ZW58MHwwfHx8MTc2MjkyMTc1OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Studio" />
          </div>
        </div>
      </div>
    </section>
  )
}
