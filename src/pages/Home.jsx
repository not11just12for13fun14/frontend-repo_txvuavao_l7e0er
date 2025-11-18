import { Link } from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'
import BusinessCard from '../components/BusinessCard'
import { reviews, businesses } from '../lib/mock-data'

export default function Home(){
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Egypt’s first trusted platform for real, verified customer reviews</h1>
            <p className="mt-4 text-gray-600">Built for transparency and trust with an Arabic-first experience. Discover, write, and manage reviews that matter.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/businesses" className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Browse reviews</Link>
              <Link to="/business-dashboard" className="px-5 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Claim your business</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.slice(0,4).map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold">How it works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-white p-6">
            <h3 className="font-semibold">For consumers</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Discover businesses you care about</li>
              <li>Read honest reviews from real people</li>
              <li>Write your own experiences</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-white p-6">
            <h3 className="font-semibold">For businesses</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
              <li>Claim your profile and build trust</li>
              <li>Respond to reviews and resolve issues</li>
              <li>View insights to understand customers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold">Why Seqa</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <div className="font-semibold">Verified and credible</div>
              <p className="text-gray-600 mt-2">We promote trustworthy reviews to help people make better decisions.</p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="font-semibold">AI authenticity checks</div>
              <p className="text-gray-600 mt-2">Lightweight AI scoring to flag suspicious content in a market full of fake UGC.</p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="font-semibold">Dashboards & insights</div>
              <p className="text-gray-600 mt-2">Businesses get visibility and trends to improve experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold">Popular businesses</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.slice(0,6).map(b => <BusinessCard key={b.id} business={b} />)}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-lg border p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">For SMEs and public services</div>
                <p className="text-gray-600">Manage reputation, understand customer pain points, and build trust at scale.</p>
              </div>
              <Link to="/pricing" className="px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">See pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
