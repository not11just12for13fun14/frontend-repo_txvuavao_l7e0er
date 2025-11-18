import { useState } from 'react'

export default function Login(){
  const [tab, setTab] = useState('Consumer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <div className="mt-4 flex gap-2 justify-center">
        {['Consumer','Business'].map(t => (
          <button key={t} onClick={()=>setTab(t)} className={`px-3 py-1.5 rounded-md text-sm ${tab===t? 'bg-gray-900 text-white':'bg-gray-100'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 rounded-lg border bg-white p-6 grid gap-4">
        <div>
          <label className="text-sm text-gray-700">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 w-full px-3 py-2 rounded-md border" placeholder="you@example.com"/>
        </div>
        <div>
          <label className="text-sm text-gray-700">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="mt-1 w-full px-3 py-2 rounded-md border" placeholder="••••••••"/>
        </div>
        <div>
          <label className="text-sm text-gray-700">Optional phone</label>
          <div className="flex gap-2">
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" className="mt-1 w-full px-3 py-2 rounded-md border" placeholder="010 123 456 78"/>
            <button onClick={()=> setOtpSent(true)} type="button" className="mt-1 px-3 py-2 rounded-md border bg-white">Send OTP</button>
          </div>
        </div>
        {otpSent && <div className="text-xs text-emerald-700">OTP sent! (mock)</div>}
        <button onClick={()=> setMessage('Logged in (mock). Redirecting…')} className="px-4 py-2 rounded-md bg-emerald-600 text-white">Login</button>
        {message && <div className="text-sm text-emerald-700">{message}</div>}
      </div>
    </div>
  )
}
