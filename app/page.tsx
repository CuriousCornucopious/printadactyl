import Link from 'next/link'
import { Metadata } from 'next'
import Stats from '@/components/Stats'

export const metadata: Metadata = {
  title: 'Printadactyl - Your ideas, printed.',
  description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
  openGraph: {
    title: 'Printadactyl - Your ideas, printed.',
    description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printadactyl - Your ideas, printed.',
    description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="mb-8">
          <span className="inline-block text-6xl mb-4 animate-bounce">🦕</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your ideas, <span className="text-primary">printed</span>.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          The marketplace where designers post print jobs and makers compete with bids. 
          Get the best price, quality, and turnaround — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/post-job"
            className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Post a Job
          </Link>
          <Link
            href="/jobs"
            className="px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            Browse Jobs
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-surface">
        <div className="max-w-4xl mx-auto px-4">
          <Stats />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Our bidding model means you get competitive pricing from multiple makers — no negotiations needed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">Post Your Job</h3>
              <p className="text-gray-400">
                Describe what you need — material, quantity, deadline, budget. 
                Upload your design files.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center p-6 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Get Bids</h3>
              <p className="text-gray-400">
                Multiple makers see your job and submit competitive bids. 
                Compare prices, turnaround, and portfolios.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center p-6 relative">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Pick a Winner</h3>
              <p className="text-gray-400">
                Choose the best bid. The maker prints and ships. 
                You leave a review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What we print</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-surface rounded-lg border border-surface-light hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-primary mb-2">3D Prints</h3>
              <p className="text-gray-400">PLA, PETG, resin, nylon — bring your models to life.</p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-surface-light hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-secondary mb-2">Apparel</h3>
              <p className="text-gray-400">T-shirts, hoodies, tank tops — custom designs.</p>
            </div>
            <div className="p-6 bg-surface rounded-lg border border-surface-light hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-accent mb-2">Marketing</h3>
              <p className="text-gray-400">Banners, stickers, vinyl wraps, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What people say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-lg border border-surface-light">
              <p className="text-gray-300 mb-4">
                "Posted a job for 50 custom dice trays and got 8 bids within a day. 
                Saved me time and money compared to other platforms."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  🎲
                </div>
                <div>
                  <div className="font-semibold">Alex D.</div>
                  <div className="text-sm text-gray-400">Game Designer</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-background rounded-lg border border-surface-light">
              <p className="text-gray-300 mb-4">
                "As a maker, I love the bidding model. It brings in customers 
                who are ready to work — no tire-kickers."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  🖨️
                </div>
                <div>
                  <div className="font-semibold">Jordan M.</div>
                  <div className="text-sm text-gray-400">3D Print Maker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-3xl font-bold mb-4">Ready to print?</h2>
          <p className="text-gray-400 mb-8">
            Join designers and makers already using Printadactyl.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
            <Link
              href="/jobs"
              className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-surface-light transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 border-t border-surface">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">For Designers</h4>
              <Link href="/post-job" className="text-gray-400 hover:text-primary block text-sm">
                Post a Job
              </Link>
              <Link href="/jobs" className="text-gray-400 hover:text-primary block text-sm">
                Browse Makers
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Makers</h4>
              <Link href="/signup" className="text-gray-400 hover:text-primary block text-sm">
                Join as Maker
              </Link>
              <Link href="/jobs" className="text-gray-400 hover:text-primary block text-sm">
                Find Jobs
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <Link href="/about" className="text-gray-400 hover:text-primary block text-sm">
                About
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-primary block text-sm">
                Contact
              </Link>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <Link href="/privacy" className="text-gray-400 hover:text-primary block text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary block text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
