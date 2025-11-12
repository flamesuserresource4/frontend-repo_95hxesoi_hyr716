import { useEffect, useState } from 'react'

const projectsSeed = [
  { id: 1, title: 'Pulse HQ Campus', tag: 'Workplace', image: 'https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, title: 'Harbor Civic Hall', tag: 'Public', image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Axis Innovation Lab', tag: 'Workplace', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Quartz Residential Tower', tag: 'Living', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Lumen Cultural Center', tag: 'Culture', image: 'https://images.unsplash.com/photo-1642552194312-1ae7102f89e7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMEhRJTIwQ2FtcHVzfGVufDB8MHx8fDE3NjI5NDQwMjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Stream Mobility Hub', tag: 'Infrastructure', image: 'https://images.unsplash.com/photo-1642552194312-1ae7102f89e7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQdWxzZSUyMEhRJTIwQ2FtcHVzfGVufDB8MHx8fDE3NjI5NDQwMjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [items, setItems] = useState(projectsSeed)

  useEffect(() => {
    if (filter === 'All') setItems(projectsSeed)
    else setItems(projectsSeed.filter(p => p.tag === filter))
  }, [filter])

  const filters = ['All', 'Workplace', 'Public', 'Living', 'Culture', 'Infrastructure']

  return (
    <section id="work" className="bg-zinc-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Selected Work</h2>
            <p className="text-zinc-600 mt-2">A cross-section of recent projects and ongoing research.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===f? 'bg-zinc-900 text-white border-zinc-900':'border-zinc-300 text-zinc-700 hover:bg-zinc-100'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => (
            <a key={p.id} href="#" className="group rounded-xl overflow-hidden bg-white shadow-sm border border-zinc-200">
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
            </a>
          ))}
        </div>

        <div className="mt-8 flex md:hidden gap-2 overflow-x-auto no-scrollbar">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border whitespace-nowrap ${filter===f? 'bg-zinc-900 text-white border-zinc-900':'border-zinc-300 text-zinc-700'}`}>{f}</button>
          ))}
        </div>
      </div>
    </section>
  )
}
