'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { UserRole, UserRoles } from '@/types'

export default function SignupPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [roles, setRoles] = useState<UserRoles>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggleRole = (role: UserRole) => {
    setRoles(prev => 
      prev.includes(role)
        ? prev.filter(r => r !== role)
        : [...prev, role]
    )
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Require at least one role
    if (roles.length === 0) {
      setError('Please select at least one option')
      setLoading(false)
      return
    }

    // Sign up with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    // If successful, create profile
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: authData.user.id,
          email,
          roles,
          display_name: displayName,
        })

      if (profileError) {
        setError(profileError.message)
        setLoading(false)
        return
      }
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="mt-2 text-gray-400">Join Printadactyl today 🎉</p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Role selector - checkboxes */}
            <div>
              <label className="block text-sm font-medium mb-2">I want to...</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => toggleRole('designer')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    roles.includes('designer')
                      ? 'border-primary bg-primary/10'
                      : 'border-surface-light hover:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-1">🎨</div>
                  <div className="font-semibold">Design</div>
                  <div className="text-xs text-gray-400">Post jobs</div>
                </button>
                <button
                  type="button"
                  onClick={() => toggleRole('maker')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    roles.includes('maker')
                      ? 'border-primary bg-primary/10'
                      : 'border-surface-light hover:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-1">🖨️</div>
                  <div className="font-semibold">Make</div>
                  <div className="text-xs text-gray-400">Submit bids</div>
                </button>
                <button
                  type="button"
                  onClick={() => toggleRole('explorer')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    roles.includes('explorer')
                      ? 'border-primary bg-primary/10'
                      : 'border-surface-light hover:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-1">🔍</div>
                  <div className="font-semibold">Explore</div>
                  <div className="text-xs text-gray-400">Just looking</div>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="displayName" className="block text-sm font-medium mb-1">
                Display Name
              </label>
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your name or business"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
<!-- force redeploy Tue Sep 29 06:45:50 UTC 2026 -->
