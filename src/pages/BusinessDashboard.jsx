import MetricsCard from '../components/MetricsCard'
import { metrics, businesses, reviews } from '../lib/mock-data'
import { useMemo, useState } from 'react'

export default function BusinessDashboard(){
  const [bizId, setBizId] = useState('b1')
  const biz = useMemo(()=> businesses.find(b => b.id === bizId), [bizId])

  const latest = useMemo(()=> reviews.filter(r => r.businessId === bizId).slice(0,5), [bizId])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Business Dashboard</h1>
          <div className="text-sm text-gray-500">Mock view for owners</div>
        </div>
        <select value={bizId} onChange={(e)=>setBizId(e.target.value)} className="px-3 py-2 rounded-md border bg-white">
          {businesses.map(b => <option key={b.id} value={b.id}>{b.name} • {b.city}</option>)}
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricsCard title="Total reviews" value={metrics.totalReviews} />
        <MetricsCard title="Average rating" value={metrics.averageRating} />
        <MetricsCard title="Response rate" value={`${metrics.responseRate}%`} />
        <MetricsCard title="Flagged suspicious" value={`${metrics.suspiciousPercent}%`} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-white p-6">
          <div className="font-semibold mb-4">Sentiment over time</div>
          <div className="flex gap-2 items-end h-40">
            {metrics.sentiments.map((s,i)=> (
              <div key={s.label} className="flex-1">
                <div className={`w-full rounded-t ${['bg-emerald-500','bg-gray-400','bg-rose-500'][i]}`} style={{height: s.value+'%'}}></div>
                <div className="text-xs text-center mt-1 text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-white p-6">
          <div className="font-semibold mb-4">Rating distribution</div>
          <div className="space-y-2">
            {metrics.ratingDistribution.map(r => (
              <div key={r.stars} className="flex items-center gap-2 text-sm">
                <div className="w-10 text-right">{r.stars}★</div>
                <div className="flex-1 h-2 bg-gray-100 rounded">
                  <div className="h-2 bg-emerald-600 rounded" style={{width: r.value+'%'}}></div>
                </div>
                <div className="w-8 text-right text-gray-600">{r.value}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-white p-6">
        <div className="font-semibold mb-3">Latest reviews</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2">Title</th>
                <th className="py-2">Rating</th>
                <th className="py-2">Date</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {latest.map(l => (
                <tr key={l.id} className="border-t">
                  <td className="py-2 pr-4">{l.title}</td>
                  <td className="py-2">{l.rating}★</td>
                  <td className="py-2">{new Date(l.date).toLocaleDateString()}</td>
                  <td className="py-2 space-x-2">
                    <button className="px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50">Reply</button>
                    <button className="px-3 py-1.5 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Mark as resolved</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 rounded-lg border bg-white p-6">
        <div className="font-semibold">Automated review invitations</div>
        <p className="text-gray-600 text-sm mt-2">In the future, this will send review links automatically after purchases. Toggle the switch to simulate.</p>
        <div className="mt-3">
          <button className="px-3 py-1.5 rounded-md bg-gray-900 text-white">Toggle</button>
        </div>
      </div>
    </div>
  )
}
