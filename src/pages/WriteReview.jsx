import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { businesses, reviews as mockReviews } from '../lib/mock-data'

export default function WriteReview(){
  const navigate = useNavigate()
  const location = useLocation()
  const prefill = location.state?.businessId || ''

  const [form, setForm] = useState({ businessId: prefill, rating: 5, title: '', text: '' })
  const [success, setSuccess] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // push to local mock list (not persisted across reloads)
    mockReviews.unshift({
      id: 'r'+(Math.random()*100000|0),
      businessId: form.businessId,
      businessName: businesses.find(b => b.id === form.businessId)?.name || 'Unknown',
      category: businesses.find(b => b.id === form.businessId)?.category || 'Other',
      rating: Number(form.rating),
      title: form.title,
      text: form.text,
      userId: 'u1',
      userName: 'Omar Khaled',
      date: new Date().toISOString().slice(0,10),
      badges: ['Verified purchase'],
      aiScore: 90,
    })
    setSuccess(true)
    setTimeout(()=> navigate('/feed'), 1200)
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-semibold">Write a review</h1>
      <p className="text-gray-600 mt-1 text-sm">Please be honest and constructive. Keep it respectful and helpful to others.</p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div>
          <label className="text-sm text-gray-700">Business</label>
          <select required value={form.businessId} onChange={(e)=>setForm({...form, businessId: e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border bg-white">
            <option value="" disabled>Select a business</option>
            {businesses.map(b => <option key={b.id} value={b.id}>{b.name} • {b.city}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-700">Rating</label>
          <input type="range" min="1" max="5" value={form.rating} onChange={(e)=>setForm({...form, rating: e.target.value})} className="w-full"/>
          <div className="text-sm text-gray-600">{form.rating} stars</div>
        </div>
        <div>
          <label className="text-sm text-gray-700">Title</label>
          <input required value={form.title} onChange={(e)=>setForm({...form, title: e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"/>
        </div>
        <div>
          <label className="text-sm text-gray-700">Review</label>
          <textarea required rows={5} value={form.text} onChange={(e)=>setForm({...form, text: e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"></textarea>
        </div>
        <div className="rounded-md bg-amber-50 text-amber-900 p-3 text-sm">
          Keep it useful, relevant, and respectful. Avoid personal info or promotional content.
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={()=>navigate(-1)} className="px-4 py-2 rounded-md border bg-white">Cancel</button>
          <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Submit</button>
        </div>
        {success && <div className="text-emerald-700 text-sm">Review submitted! Redirecting…</div>}
      </form>
    </div>
  )
}
