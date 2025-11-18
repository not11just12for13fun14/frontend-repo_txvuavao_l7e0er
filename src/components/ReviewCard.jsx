import { Star } from 'lucide-react'

export default function ReviewCard({ review }){
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="font-medium">{review.businessName} <span className="text-xs text-gray-500">• {review.category}</span></div>
        <div className="flex items-center gap-1">
          {Array.from({length:5}).map((_,i)=> (
            <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
          ))}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-600">{review.title}</div>
      <p className="mt-1 text-gray-700">{review.text}</p>
      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <div>{review.userName} • {new Date(review.date).toLocaleDateString()}</div>
        <div className="flex items-center gap-2">
          {review.badges?.map((b)=> (
            <span key={b} className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{b}</span>
          ))}
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">AI score {review.aiScore}%</span>
        </div>
      </div>
    </div>
  )
}
