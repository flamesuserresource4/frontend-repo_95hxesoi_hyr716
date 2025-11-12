import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, FILTERS } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('Alles')
  const [items, setItems] = useState(PROJECTS)

  useEffect(() => {
    if (filter === 'Alles') setItems(PROJECTS)
    else setItems(PROJECTS.filter(p => p.tag === filter))
  }, [filter])

  return (
    <section id="work" className="bg-zinc-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Geselecteerd werk</h2>
            <p className="text-zinc-600 mt-2">Een dwarsdoorsnede van recente projecten en lopend onderzoek.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===f? 'bg-zinc-900 text-white border-zinc-900':'border-zinc-300 text-zinc-700 hover:bg-zinc-100'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <Link key={p.id} to={`/project/${p.id}`} className="group rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-200">
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  {p.tag}
                </div>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-zinc-700">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex md:hidden gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border whitespace-nowrap ${filter===f? 'bg-zinc-900 text-white border-zinc-900':'border-zinc-300 text-zinc-700'}`}>{f}</button>
          ))}
        </div>
      </div>
    </section>
  )
}
