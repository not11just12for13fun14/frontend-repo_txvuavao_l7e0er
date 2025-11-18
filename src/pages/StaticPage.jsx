export default function StaticPage({ title }){
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="prose prose-slate mt-4">
        <p>
          This is a placeholder {title} page for Seqa Reviews. We focus on transparency, trust, and providing an Arabic-first experience for Egypt and the MENA region.
        </p>
        <p>
          Our mission is to help people make better decisions through credible reviews, and help businesses understand and improve customer experiences.
        </p>
      </div>
    </div>
  )
}
