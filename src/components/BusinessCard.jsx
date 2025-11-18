import { MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BusinessCard({ business, rating=4.2, reviewsCount=120 }){
  return (
    <Link to={`/business/${business.id}`} className="block rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{business.name}</div>
          <div className="text-xs text-gray-500">{business.category}</div>
        </div>
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-amber-400"/>
          <span className="text-sm font-medium text-gray-800">{rating.toFixed(1)}</span>
          <span className="text-xs text-gray-500">({reviewsCount})</span>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="h-4 w-4"/> {business.city}
      </div>
      <div className="mt-2 text-sm text-gray-700 line-clamp-2">{business.description}</div>
    </Link>
  )
}
