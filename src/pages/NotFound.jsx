import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="text-7xl font-bold text-gray-200">404</div>
      <h1 className="text-2xl font-semibold mt-2">Page not found</h1>
      <p className="text-gray-600 mt-1">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block px-4 py-2 rounded-md bg-emerald-600 text-white">Go home</Link>
    </div>
  )
}
