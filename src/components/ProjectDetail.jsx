import { useParams, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-zinc-900">Project niet gevonden</h1>
          <p className="text-zinc-600 mt-2">Het door u gezochte project bestaat niet.</p>
          <Link to="/" className="mt-6 inline-block px-4 py-2 rounded-md bg-zinc-900 text-white">Terug naar home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <p className="uppercase tracking-[0.25em] text-xs text-white/70">{project.tag}</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">{project.title}</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-xl overflow-hidden border border-zinc-200">
          <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-10">
          <div className="md:col-span-2 text-zinc-700 leading-relaxed">
            <p>
              Dit is een voorbeeld van een projectdetailpagina. Hier komt een korte inleiding over de context, ambities en het resultaat. We kunnen hier metrics, duurzaamheid, programma en partners toevoegen.
            </p>
            <p className="mt-4">
              Wilt u echte projectteksten en meer beeld toevoegen? Stuur de content en we werken het in.
            </p>
          </div>
          <aside className="space-y-2 text-sm text-zinc-600">
            <div className="flex justify-between"><span>Locatie</span><span>Nederland</span></div>
            <div className="flex justify-between"><span>Opdrachtgever</span><span>—</span></div>
            <div className="flex justify-between"><span>Programma</span><span>{project.tag}</span></div>
            <div className="flex justify-between"><span>Status</span><span>Lopend</span></div>
          </aside>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-zinc-900 underline underline-offset-4">← Terug naar overzicht</Link>
        </div>
      </main>
    </div>
  )
}
