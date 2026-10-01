'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const supabase = createClient()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        setProfile(data)
      }
    }
    fetch()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className="flex items-center gap-6">
      <Link href="/jobs" className="hover:text-primary transition-colors">Browse Jobs</Link>
      <Link href="/post-job" className="hover:text-primary transition-colors">Post a Job</Link>
      <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
      {user && (
        <Link href="/settings" className="hover:text-primary transition-colors">
          Settings
        </Link>
      )}
      {user ? (
        <button
          onClick={handleLogout}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Logout{profile?.display_name ? ` (${profile.display_name})` : ''}
        </button>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Login
        </Link>
      )}
    </nav>
  )
}
