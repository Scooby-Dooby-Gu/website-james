import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Financial consulting background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SEE BEHIND THE NUMBERS
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Strategic Financial Leadership designed to drive clarity and control while accelerating growth for SMB companies.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Cash Flow Forecasting',
              'Budgeting',
              'Financial Modeling',
              'Profitability Analysis',
              'Capital Raise Support',
              'Systems & Process Improvement'
            ].map((service) => (
              <div key={service} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="James Sproule"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">About James</h2>
              <p className="mb-4">
                15-year FP&A and operations career across financial institutions and SMBs. Former Head of Finance at Stantt (Series A).
              </p>
              <p className="mb-4">
                Managed large teams, $50M+ in client accounts, $18M facility builds. Extensive experience in real estate and strategic finance.
              </p>
              <p className="mb-4">
                Problem-solver, learner, efficiency driver, and team-builder with expertise in FinTech, SaaS, Retail, B2B, Real Estate, and Nonprofit sectors.
              </p>
              <Link
                href="https://linkedin.com/in/jamessproule"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Connect on LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Request 15 minutes to discuss your situation
          </p>
          <a
            href="https://calendly.com/jamessproule/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
