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
  const [success, setSuccess] = useState<string | null>(null)

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

    // Step 1: Create auth user (no metadata — we handle profile manually)
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }

    if (!authData.user) {
      setError('Signup failed: no user returned from auth')
      setLoading(false)
      return
    }

    // Step 2: Explicitly create profile row in public.profiles.
    // We do this in code (not via DB trigger) so any failure surfaces
    // a real SQL error message instead of a generic 'Database error'.
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        email,
        roles,
        display_name: displayName,
      })

    if (profileError) {
      // Step 2b: Profile insert failed — clean up the auth user so the
      // user can retry with the same email without hitting
      // 'User already registered'.
      await supabase.auth.admin.deleteUser(authData.user.id).catch(() => {
        // Best-effort cleanup. If it fails (we don't have admin rights
        // from the client), at least surface the original error.
      })

      setError(`Profile creation failed: ${profileError.message} (code: ${profileError.code || 'unknown'})`)
      setLoading(false)
      return
    }

    // Step 3: If email confirmation is required, no session yet.
    if (!authData.session) {
      setSuccess('Account created! Check your email to confirm your address, then sign in.')
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create an account</h2>
          <p className="mt-2 text-gray-400">Join Printadactyl today</p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-500/10 border border-green-500 rounded-lg text-green-400 text-sm">
              {success}
            </div>
          )}

          <div className="space-y-4">
            {/* Role selector - checkboxes */}
            <div>
              <label className="block text-sm font-medium mb-2">I want to... (select all that apply)</label>
              <div className="space-y-3">
                <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  roles.includes('designer')
                    ? 'border-primary bg-primary/10'
                    : 'border-surface-light hover:border-gray-600'
                }`}>
                  <input
                    type="checkbox"
                    checked={roles.includes('designer')}
                    onChange={() => toggleRole('designer')}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-2xl mr-2">🎨</span>
                  <div>
                    <div className="font-semibold">Design</div>
                    <div className="text-xs text-gray-400">Post jobs and find makers</div>
                  </div>
                </label>
                <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  roles.includes('maker')
                    ? 'border-primary bg-primary/10'
                    : 'border-surface-light hover:border-gray-600'
                }`}>
                  <input
                    type="checkbox"
                    checked={roles.includes('maker')}
                    onChange={() => toggleRole('maker')}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-2xl mr-2">🖨️</span>
                  <div>
                    <div className="font-semibold">Make</div>
                    <div className="text-xs text-gray-400">Submit bids on print jobs</div>
                  </div>
                </label>
                <label className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  roles.includes('ideator')
                    ? 'border-primary bg-primary/10'
                    : 'border-surface-light hover:border-gray-600'
                }`}>
                  <input
                    type="checkbox"
                    checked={roles.includes('ideator')}
                    onChange={() => toggleRole('ideator')}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-2xl mr-2">💡</span>
                  <div>
                    <div className="font-semibold">Ideate</div>
                    <div className="text-xs text-gray-400">Brainstorm and post ideas</div>
                  </div>
                </label>
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
