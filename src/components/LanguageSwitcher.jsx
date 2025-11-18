export default function LanguageSwitcher({ lang, setLang, rtl, setRtl }){
  return (
    <div className="inline-flex items-center gap-2 text-xs">
      <button onClick={()=>setLang('EN')} className={`px-2 py-1 rounded ${lang==='EN'?'bg-gray-900 text-white':'bg-gray-100'}`}>EN</button>
      <button onClick={()=>setLang('AR')} className={`px-2 py-1 rounded ${lang==='AR'?'bg-gray-900 text-white':'bg-gray-100'}`}>AR</button>
      <button onClick={()=>setRtl(!rtl)} className={`px-2 py-1 rounded ${rtl?'bg-emerald-600 text-white':'bg-emerald-50 text-emerald-800'}`}>RTL</button>
    </div>
  )
}
