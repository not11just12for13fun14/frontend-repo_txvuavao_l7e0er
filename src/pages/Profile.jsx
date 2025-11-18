export default function Profile(){
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-lg border bg-white p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=12" alt="avatar" className="h-14 w-14 rounded-full"/>
            <div>
              <div className="text-lg font-semibold">Omar Khaled</div>
              <div className="text-sm text-gray-500">Joined April 2023</div>
            </div>
          </div>
          <button className="px-4 py-2 rounded-md border bg-white">Edit profile</button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="font-semibold">My reviews</div>
            <ul className="mt-2 text-sm text-emerald-700 space-y-1">
              <li><a href="/business/b1">Cairo Bites</a> — Amazing koshary and service</li>
              <li><a href="/business/b3">Lotus Clinic</a> — Professional doctors</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Loyalty points & rewards</div>
            <div className="mt-2 h-2 bg-gray-100 rounded">
              <div className="h-2 bg-emerald-600 rounded" style={{width:'62%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">820 points • Level 3</div>
          </div>
        </div>
      </div>
    </div>
  )
}
