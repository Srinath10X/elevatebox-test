export default function Header() {
  return (
    <header className="w-full border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-indigo-600">
          Elevate<span className="text-slate-900">Box</span>
          <span className="block text-sm font-medium tracking-wide text-indigo-600">
            Pro 😎
          </span>
        </div>

        {/*
					TODO: To my future self just fix this piece of shit and make it responsive with hamburger menu
				*/}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 text-sm">
          <a href="#">Curriculum</a>
          <a href="#">Job Support</a>
          <a href="#">Reviews</a>
          <a href="#">Fee</a>
          <a href="#">FAQs</a>
          <a
            href="#"
            className="bg-indigo-600 text-white px-4 py-2 font-medium rounded-md"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
