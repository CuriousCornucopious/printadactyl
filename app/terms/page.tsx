'use client'

import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-surface">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">🦕 Printadactyl</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <p><strong>Effective Date:</strong> September 28, 2026</p>

          <h2 className="text-xl font-semibold text-white mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Printadactyl, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">2. Description of Service</h2>
          <p>
            Printadactyl is a marketplace platform connecting designers with print and 
            manufacturing service providers (makers). We provide a platform for posting jobs, 
            submitting bids, and facilitating transactions between users.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">3. User Accounts</h2>
          <p>
            You are responsible for maintaining the security of your account and password. 
            You must provide accurate and complete information when creating your account. 
            You are solely responsible for all activity that occurs under your account.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">4. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Post false, misleading, or fraudulent job postings or bids</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the intellectual property rights of others</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">5. Transactions and Payments</h2>
          <p>
            Users are responsible for arranging payments and transactions directly with each other. 
            Printadactyl does not process payments or hold funds. Any payment terms are between 
            the designer and maker.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">6. Intellectual Property</h2>
          <p>
            Users retain ownership of their designs and intellectual property. By posting 
            designs on Printadactyl, you grant us a license to use the content for operating 
            our service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">7. Disclaimer of Warranties</h2>
          <p>
            Printadactyl is provided "as is" without warranties of any kind. We do not 
            guarantee the quality, safety, or legality of jobs posted or bids submitted.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">8. Limitation of Liability</h2>
          <p>
            Printadactyl shall not be liable for any indirect, incidental, special, or 
            consequential damages arising from your use of the service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold Printadactyl harmless from any claims, damages, 
            or expenses arising from your use of the service or violation of these terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">10. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Continued use of Printadactyl after 
            changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">11. Contact</h2>
          <p>
            For questions about these Terms of Service, contact us at support@printadactyl.com.
          </p>
        </div>
      </main>
    </div>
  )
}
