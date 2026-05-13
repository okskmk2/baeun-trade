import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
              Baeun Trade
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/contact" className="text-blue-300 cursor-pointer">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We're here to help. Reach out anytime.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-10 space-y-8">
            {/* WhatsApp */}
            <div className="flex items-center gap-6">
              <div className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-3xl"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">WhatsApp</div>
                <a
                  href="https://wa.me/821049200523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold text-gray-900 hover:text-green-600 transition-colors"
                >
                  +82 10-4920-0523
                </a>
                <p className="text-gray-500 text-sm mt-1">Click to open WhatsApp chat</p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">Email</div>
                <a
                  href="mailto:sourcing@baeun.com"
                  className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  sourcing@baeun.com
                </a>
                <p className="text-gray-500 text-sm mt-1">We'll respond within 48 hours</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
