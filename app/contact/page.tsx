import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Printadactyl',
  description: 'Get in touch with the Printadactyl team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Get in touch</h1>
        <p className="text-gray-400 text-center mb-12">
          Have questions? We'd love to hear from you.
        </p>

        <div className="bg-surface p-8 rounded-lg border border-surface-light">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a 
                  href="mailto:hello@printadactyl.com" 
                  className="text-primary hover:underline"
                >
                  hello@printadactyl.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">💬</div>
              <div>
                <h3 className="font-semibold mb-1">Discord</h3>
                <p className="text-gray-400">Join our community Discord</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-surface-light">
            <p className="text-gray-400 text-sm text-center">
              We typically respond within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
