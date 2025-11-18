import { useMemo, useState } from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../lib/mock-data'

export default function Feed(){
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Recent')

  const items = useMemo(() => {
    let arr = [...reviews]
    if (category !== 'All') arr = arr.filter(r => r.category === category)
    if (sort === 'Recent') arr = arr.sort((a,b)=> new Date(b.date) - new Date(a.date))
    if (sort === 'Top rated') arr = arr.sort((a,b)=> b.rating - a.rating)
    return arr
  }, [category, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-8 md:grid-cols-[1fr_320px]">
      <div>
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex gap-2">
            {['All','Restaurant','Cafe','Clinic','Salon'].map(c => (
              <button key={c} onClick={()=>setCategory(c)} className={`px-3 py-1.5 rounded-md border text-sm ${category===c? 'bg-gray-900 text-white border-gray-900':'bg-white'}`}>{c}</button>
            ))}
          </div>
          <select className="px-3 py-2 rounded-md border bg-white" value={sort} onChange={(e)=>setSort(e.target.value)}>
            {['Recent','Top rated','Most discussed'].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="mt-6 grid gap-4">
          {items.map(r => <ReviewCard key={r.id} review={r} />)}
        </div>
      </div>

      <aside className="hidden md:block space-y-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="font-semibold">Suggested businesses</div>
          <ul className="mt-2 text-sm text-emerald-700 space-y-1">
            <li><a href="/business/b1">Cairo Bites</a></li>
            <li><a href="/business/b2">Nile Beans Cafe</a></li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-semibold">Top categories</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {['Restaurants','Cafes','Clinics','Salons'].map(t => <span key={t} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{t}</span>)}
          </div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-semibold">Loyalty points</div>
          <div className="mt-2 text-sm">You have <span className="font-semibold">820</span> points</div>
          <div className="mt-3 h-2 bg-gray-100 rounded">
            <div className="h-2 bg-emerald-600 rounded" style={{width:'62%'}}></div>
          </div>
          <div className="mt-1 text-xs text-gray-500">Level 3 • 62% to next badge</div>
        </div>
      </aside>
    </div>
  )
}
