import { useMemo, useState } from 'react'
import BusinessCard from '../components/BusinessCard'
import { businesses, cities } from '../lib/mock-data'

export default function Businesses(){
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [city, setCity] = useState('All')

  const items = useMemo(()=>{
    return businesses.filter(b => {
      const q = query.toLowerCase()
      const matchesQuery = !q || b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
      const matchesCategory = category === 'All' || b.category === category
      const matchesCity = city === 'All' || b.city === city
      return matchesQuery && matchesCategory && matchesCity
    })
  }, [query, category, city])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-lg border bg-white p-4 flex flex-wrap gap-3 items-center">
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search businesses" className="px-3 py-2 rounded-md border w-full md:w-64"/>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="px-3 py-2 rounded-md border">
          {['All','Restaurant','Cafe','Clinic','Salon'].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={city} onChange={(e)=>setCity(e.target.value)} className="px-3 py-2 rounded-md border">
          {['All', ...cities].map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(b => <BusinessCard key={b.id} business={b} />)}
      </div>
    </div>
  )
}
