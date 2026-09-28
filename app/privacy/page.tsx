'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-surface">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">🦕 Printadactyl</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <p><strong>Effective Date:</strong> September 28, 2026</p>

          <h2 className="text-xl font-semibold text-white mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you create an account, 
            post a job, or submit a bid. This includes your email address, password, 
            display name, and role (designer or maker).
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to: provide, maintain, and improve our services; 
            process your transactions; communicate with you about jobs and bids; and comply 
            with legal obligations.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">3. Information Sharing</h2>
          <p>
            We may share your information with: service providers who assist us in operating 
            our platform; other users (your display name and portfolio may be visible to others); 
            and when required by law.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your 
            personal information. Passwords are hashed and stored securely by Supabase Auth.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">5. Your Rights</h2>
          <p>
            You may access, correct, or delete your personal information through your account 
            settings. You may also request deletion of your account and associated data.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            support@printadactyl.com.
          </p>
        </div>
      </main>
    </div>
  )
}
