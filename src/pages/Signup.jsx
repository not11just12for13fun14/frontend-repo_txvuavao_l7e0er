import { useState } from 'react'

export default function Signup(){
  const [tab, setTab] = useState('Consumer')
  const [form, setForm] = useState({ name:'', email:'', password:'', businessName:'', category:'Restaurant', city:'Cairo' })
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setMessage('Account created (mock). Welcome to Seqa!')
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold text-center">Sign up</h1>
      <div className="mt-4 flex gap-2 justify-center">
        {['Consumer','Business'].map(t => (
          <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md text-sm ${tab===t? 'bg-gray-900 text-white':'bg-gray-100'}`}>{t}</button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 rounded-lg border bg-white p-6 grid gap-4">
        <div>
          <label className="text-sm text-gray-700">Name</label>
          <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"/>
        </div>
        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"/>
        </div>
        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input required type="password" value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"/>
        </div>

        {tab === 'Business' && (
          <div className="grid md:grid-cols-3 gap-3">
            <div className="md:col-span-3">
              <label className="text-sm text-gray-700">Business name</label>
              <input value={form.businessName} onChange={(e)=>setForm({...form, businessName:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border"/>
            </div>
            <div>
              <label className="text-sm text-gray-700">Category</label>
              <select value={form.category} onChange={(e)=>setForm({...form, category:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border bg-white">
                {['Restaurant','Cafe','Clinic','Salon'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">City</label>
              <select value={form.city} onChange={(e)=>setForm({...form, city:e.target.value})} className="mt-1 w-full px-3 py-2 rounded-md border bg-white">
                {['Cairo','Giza','Alexandria','Mansoura'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        )}

        <button className="px-4 py-2 rounded-md bg-emerald-600 text-white">Create account</button>
        {message && <div className="text-sm text-emerald-700">{message}</div>}
      </form>
    </div>
  )
}
