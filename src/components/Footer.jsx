export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-4 text-sm">
        <div>
          <div className="font-bold text-lg">Seqa <span className="text-emerald-600">Reviews</span></div>
          <p className="text-gray-600 mt-2">Egypt’s trusted platform for real, verified customer reviews.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/about" className="hover:text-emerald-600">About</a></li>
            <li><a href="/contact" className="hover:text-emerald-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/terms" className="hover:text-emerald-600">Terms</a></li>
            <li><a href="/privacy" className="hover:text-emerald-600">Privacy</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Social</div>
          <div className="flex gap-3 text-gray-600">
            <a className="hover:text-emerald-600" href="#">Twitter</a>
            <a className="hover:text-emerald-600" href="#">LinkedIn</a>
            <a className="hover:text-emerald-600" href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t text-center py-4 text-xs text-gray-500">© {new Date().getFullYear()} Seqa Reviews. All rights reserved.</div>
    </footer>
  )
}
