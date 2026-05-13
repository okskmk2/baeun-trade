import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">Baeun Trade</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/contact" className="hover:text-blue-300 transition-colors cursor-pointer">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Reliable Trade Brokerage with
              <br />
              <span className="text-blue-600">Extensive Buyer Network</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Swift &amp; Professional Service Delivery - Clean Processing,
              Timely Execution, Promises Kept
            </p>
          </div>
        </div>
      </section>

      {/* Company Strengths Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">500+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Active Global Buyers
              </h3>
              <p className="text-gray-600">
                Extensive network ensuring quick matches
              </p>
              <i className="fas fa-users text-3xl text-gray-500 mt-4"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">99.8%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Promise Fulfillment Rate
              </h3>
              <p className="text-gray-600">Reliability you can count on</p>
              <i className="fas fa-check-circle text-3xl text-gray-500 mt-4"></i>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">48</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hour Average Processing
              </h3>
              <p className="text-gray-600">Swift execution, every time</p>
              <i className="fas fa-clock text-3xl text-gray-500 mt-4"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & LC Emphasis */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless LC Processing
            </h2>
            <p className="text-xl text-gray-600">
              With Trusted Banking Partners
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Banking Excellence
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-university text-blue-600 mr-3"></i>
                    <span>
                      Direct relationships with major international banks
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-file-contract text-blue-600 mr-3"></i>
                    <span>Expert LC processing and documentation</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-handshake text-gray-500 mr-3"></i>
                    <span>
                      TT flexibility for established trust relationships
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-certificate text-4xl text-blue-600 mb-2"></i>
                  <div className="text-sm font-semibold">Verified Partner</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-university text-4xl text-blue-600 mb-2"></i>
                  <div className="text-sm font-semibold">Bank Network</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-credit-card text-4xl text-blue-600 mb-2"></i>
                  <div className="text-sm font-semibold">Secure Payments</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <i className="fas fa-shield-alt text-4xl text-gray-500 mb-2"></i>
                  <div className="text-sm font-semibold">Trade Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading International Trade Partners
            </h2>
            <p className="text-lg text-gray-600">Clean Execution, Every Time</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "fa-apple-alt", label: "Food Distributor" },
              { icon: "fa-industry", label: "Manufacturing Corp" },
              { icon: "fa-seedling", label: "Agricultural Co." },
              { icon: "fa-hammer", label: "Raw Materials" },
            ].map((partner) => (
              <div
                key={partner.label}
                className="bg-gray-50 p-6 rounded-lg text-center relative"
              >
                <i
                  className={`fas ${partner.icon} text-4xl text-gray-600 mb-3`}
                ></i>
                <div className="text-sm font-semibold">{partner.label}</div>
                <div className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive trade solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="text-center mb-6">
                <i className="fas fa-store text-5xl text-blue-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Marketplace
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-apple-alt text-gray-500 mr-3"></i>
                  <span>Food products &amp; agricultural goods</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cogs text-gray-500 mr-3"></i>
                  <span>Manufactured products &amp; machinery</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cube text-gray-500 mr-3"></i>
                  <span>Raw materials &amp; commodities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-gray-600">
              <div className="text-center mb-6">
                <i className="fas fa-shield-alt text-5xl text-gray-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Trade Assurance
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-lock text-gray-500 mr-3"></i>
                  <span>Secure escrow system</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clipboard-check text-gray-500 mr-3"></i>
                  <span>Quality inspection period</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-handshake text-gray-500 mr-3"></i>
                  <span>Reliable execution</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="text-center mb-6">
                <i className="fas fa-shipping-fast text-5xl text-blue-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900">
                  Logistics Services
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-globe text-gray-500 mr-3"></i>
                  <span>Global shipping network</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-file-alt text-gray-500 mr-3"></i>
                  <span>Documentation support</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-gray-500 mr-3"></i>
                  <span>Clean execution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Finance & Escrow System */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Escrow System
            </h2>
            <p className="text-xl text-gray-600">
              Prompt &amp; Clean Processing
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-money-check-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Secure Payment
                </h3>
                <p className="text-gray-600">
                  Funds held safely in escrow until delivery confirmation
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search-plus text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inspection Period
                </h3>
                <p className="text-gray-600">
                  Quality verification before final payment release
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-shield text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Broker Protection
                </h3>
                <p className="text-gray-600">
                  Commission automatically secured and released
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="flex justify-center items-center space-x-4 mb-6 flex-wrap gap-y-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow">
                  <i className="fas fa-university text-blue-600 mr-2"></i>
                  <span className="font-semibold">LC Processing</span>
                </div>
                <i className="fas fa-arrow-right text-gray-400"></i>
                <div className="bg-white px-4 py-2 rounded-lg shadow">
                  <i className="fas fa-shield-alt text-gray-600 mr-2"></i>
                  <span className="font-semibold">Escrow Protection</span>
                </div>
                <i className="fas fa-arrow-right text-gray-400"></i>
                <div className="bg-white px-4 py-2 rounded-lg shadow">
                  <i className="fas fa-check-circle text-blue-600 mr-2"></i>
                  <span className="font-semibold">Clean Settlement</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Average processing time: 48 hours | TT available for established
                relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8">
            Join our network of successful international traders
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-block hover:bg-blue-700 transition-colors">
            <i className="fas fa-rocket mr-2"></i>
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; 2024 Baeun Trade. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <a href="https://wa.me/821049200523" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <i className="fab fa-whatsapp text-green-400"></i>
              +82 10-4920-0523
            </a>
            <a href="mailto:sourcing@baeun.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <i className="fas fa-envelope text-gray-400"></i>
              sourcing@baeun.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
