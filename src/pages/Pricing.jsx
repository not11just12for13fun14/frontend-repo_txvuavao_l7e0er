export default function Pricing(){
  const plans = [
    { name: 'Free', price: '$0', features: ['1 team member','Basic profile','Community support'] },
    { name: 'Standard', price: '$39', features: ['5 team members','Insights & analytics','Priority support'] },
    { name: 'Premium', price: '$99', features: ['Unlimited team','Advanced insights','Sponsored placement'] },
  ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-center">Pricing</h1>
      <p className="text-center text-gray-600 mt-2">Plans tailored for businesses of all sizes</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p,i)=> (
          <div key={p.name} className={`rounded-lg border bg-white p-6 ${i===1? 'ring-2 ring-emerald-600':''}`}>
            <div className="text-sm text-gray-500">{p.name}</div>
            <div className="text-3xl font-semibold mt-1">{p.price}<span className="text-base text-gray-500">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-md bg-emerald-600 text-white">Choose</button>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-white p-6">
        <div className="font-semibold">Comparison</div>
        <div className="mt-3 grid grid-cols-4 text-sm">
          <div></div>
          {plans.map(p => <div key={p.name} className="font-medium">{p.name}</div>)}
          {['Team members','Insights & analytics','Priority support','Sponsored placement'].map((row) => (
            <>
              <div className="py-2 text-gray-600">{row}</div>
              <div className="py-2">{row==='Team members'? '1':'—'}</div>
              <div className="py-2">{row!=='Sponsored placement'? 'Yes':'—'}</div>
              <div className="py-2">Yes</div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
