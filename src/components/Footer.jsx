export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold">OTH_</h3>
            <p className="mt-2 text-sm">Architectuur, interieur en stedenbouw</p>
          </div>
          <div>
            <p className="text-sm">Amsterdam — Rotterdam</p>
            <p className="text-sm mt-2">hello@oth.studio</p>
          </div>
          <div className="md:justify-self-end text-sm">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-white">Instagram</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-white">Nieuws</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} OTH_ • Alle rechten voorbehouden</div>
      </div>
    </footer>
  )
}
