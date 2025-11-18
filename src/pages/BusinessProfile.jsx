import { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { businesses, reviews } from '../lib/mock-data'
import ReviewCard from '../components/ReviewCard'

export default function BusinessProfile(){
  const { id } = useParams()
  const navigate = useNavigate()
  const business = useMemo(()=> businesses.find(b => b.id === id), [id])
  const [tab, setTab] = useState('Reviews')
  const [ratingFilter, setRatingFilter] = useState('All')

  const businessReviews = useMemo(()=>{
    let arr = reviews.filter(r => r.businessId === id)
    if (ratingFilter !== 'All') arr = arr.filter(r => r.rating === Number(ratingFilter))
    return arr
  }, [id, ratingFilter])

  if (!business) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">Business not found</div>

  return (
    <div>
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="text-2xl font-semibold">{business.name}</div>
              <div className="text-sm text-gray-500">{business.category} • {business.city}</div>
            </div>
            <div className="flex gap-2">
              {!business.claimed && <button className="px-4 py-2 rounded-md border bg-white hover:bg-gray-50">Claim this business</button>}
              <button onClick={()=>navigate('/review/new', { state: { businessId: business.id } })} className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Write a review</button>
            </div>
          </div>

          <div className="mt-6 flex gap-4 text-sm">
            {['Reviews','Overview','Insights'].map(t => (
              <button key={t} onClick={()=>setTab(t)} className={`px-3 py-2 rounded-md ${tab===t? 'bg-gray-900 text-white':'bg-gray-100'}`}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {tab === 'Reviews' && (
          <div>
            <div className="mb-4">
              <select className="px-3 py-2 rounded-md border bg-white" value={ratingFilter} onChange={(e)=>setRatingFilter(e.target.value)}>
                {['All',5,4,3,2,1].map(v => <option key={v} value={v}>{v === 'All' ? 'All ratings' : `${v} stars`}</option>)}
              </select>
            </div>
            <div className="grid gap-4">{businessReviews.map(r => <ReviewCard key={r.id} review={r} />)}</div>
          </div>
        )}

        {tab === 'Overview' && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6">
              <div className="font-semibold">About</div>
              <p className="text-gray-600 mt-2">{business.description}</p>
              <div className="mt-4">
                <div className="text-sm text-gray-500">Opening hours</div>
                <ul className="text-sm mt-1 text-gray-700">
                  <li>Mon-Fri: {business.hours.mon_fri}</li>
                  <li>Sat: {business.hours.sat}</li>
                  <li>Sun: {business.hours.sun}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6">
              <div className="font-semibold">Location</div>
              <p className="text-gray-600 mt-2">{business.location}</p>
              <div className="mt-4 h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 text-sm">Map placeholder</div>
            </div>
          </div>
        )}

        {tab === 'Insights' && (
          <div className="grid gap-6">
            <div className="rounded-lg border bg-white p-6">
              <div className="font-semibold mb-4">Sentiment over time</div>
              <div className="flex gap-2 items-end h-32">
                {['Positive','Neutral','Negative'].map((label, i) => {
                  const heights = [70, 40, 25]
                  return (
                    <div key={label} className="flex-1">
                      <div className={`w-full rounded-t ${['bg-emerald-500','bg-gray-400','bg-rose-500'][i]}`} style={{height: heights[i]+'%'}}></div>
                      <div className="text-xs text-center mt-1 text-gray-500">{label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6">
              <div className="font-semibold mb-2">Top mentioned topics</div>
              <div className="flex flex-wrap gap-2">
                {['Service','Price','Cleanliness','Wi-Fi','Wait time'].map(t => <span key={t} className="px-2 py-1 rounded-full bg-gray-100 text-xs">{t}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
