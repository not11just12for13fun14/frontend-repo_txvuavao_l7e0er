import { useState } from 'react'
import { Menu, Search, Globe2, LogIn, UserPlus } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Navbar({ rtl, setRtl, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className={`sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${rtl ? 'rtl' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="font-bold text-xl tracking-tight">
              Seqa <span className="text-emerald-600">Reviews</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm">
              <NavLink to="/" className={({isActive}) => `hover:text-emerald-600 ${isActive ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>Home</NavLink>
              <NavLink to="/businesses" className={({isActive}) => `hover:text-emerald-600 ${isActive ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>Browse</NavLink>
              <NavLink to="/business-dashboard" className={({isActive}) => `hover:text-emerald-600 ${isActive ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>For Businesses</NavLink>
              <NavLink to="/pricing" className={({isActive}) => `hover:text-emerald-600 ${isActive ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>Pricing</NavLink>
            </nav>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search businesses"
                className="pl-9 pr-3 py-2 w-64 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') navigate('/businesses?query=' + encodeURIComponent(e.target.value))
                }}
              />
            </div>

            <div className="flex items-center gap-2">
              <Link to="/login" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50"><LogIn className="h-4 w-4"/>Login</Link>
              <Link to="/signup" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"><UserPlus className="h-4 w-4"/>Sign up</Link>
            </div>

            <button onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50">
              <Globe2 className="h-4 w-4" /> {lang}
            </button>
            <button onClick={() => setRtl(!rtl)} className="text-xs text-gray-500 hover:text-gray-700">RTL</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input placeholder="Search businesses" className="pl-9 pr-3 py-2 w-full rounded-md border border-gray-200" />
            </div>
            <nav className="grid gap-2">
              <Link to="/" className="py-2" onClick={()=>setOpen(false)}>Home</Link>
              <Link to="/businesses" className="py-2" onClick={()=>setOpen(false)}>Browse</Link>
              <Link to="/business-dashboard" className="py-2" onClick={()=>setOpen(false)}>For Businesses</Link>
              <Link to="/pricing" className="py-2" onClick={()=>setOpen(false)}>Pricing</Link>
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link to="/login" className="px-3 py-2 rounded-md border text-center" onClick={()=>setOpen(false)}>Login</Link>
              <Link to="/signup" className="px-3 py-2 rounded-md bg-emerald-600 text-white text-center" onClick={()=>setOpen(false)}>Sign up</Link>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <button onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border text-sm">
                <Globe2 className="h-4 w-4"/> {lang}
              </button>
              <button onClick={() => setRtl(!rtl)} className="text-xs text-gray-500">RTL</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
