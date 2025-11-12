export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28 bg-zinc-900">
      <div className="absolute inset-0 opacity-30" style={{background:'radial-gradient(600px 200px at 10% 10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(600px 200px at 90% 20%, rgba(34,197,94,0.2), transparent 60%)'}} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid md:grid-cols-3 gap-8 items-end">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s shape your next space.</h2>
            <p className="mt-3 text-zinc-300 max-w-2xl">We work with organisations to deliver environments that enable people and ideas to thrive.</p>
          </div>
          <div className="md:justify-self-end">
            <a href="mailto:hello@oth.studio" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors">Start a conversation</a>
          </div>
        </div>
      </div>
    </section>
  )
}
