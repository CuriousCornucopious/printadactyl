'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Job, Bid, Profile, UserRole } from '@/types'

const statusColors = {
  'open': 'text-green-400',
  'bidding_closed': 'text-yellow-400',
  'in_progress': 'text-blue-400',
  'completed': 'text-gray-400',
  'cancelled': 'text-red-400',
}

export default function DashboardPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Data
  const [myJobs, setMyJobs] = useState<Job[]>([])
  const [myBids, setMyBids] = useState<Bid[]>([])
  const [activeTab, setActiveTab] = useState<'jobs' | 'bids'>('jobs')

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    setUser(user)

    // Get profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileData) {
      setProfile(profileData as Profile)
    }

    // Fetch data based on role
    await fetchMyJobs(user.id)
    await fetchMyBids(user.id)
    
    setLoading(false)
  }

  const fetchMyJobs = async (userId: string) => {
    const { data } = await supabase
      .from('jobs')
      .select('*, bids_count: bids(count)')
      .eq('designer_id', userId)
      .order('created_at', { ascending: false })

    if (data) {
      setMyJobs(data.map(job => ({
        ...job,
        bids_count: job.bids_count?.[0]?.count || 0
      })) as Job[])
    }
  }

  const fetchMyBids = async (userId: string) => {
    const { data } = await supabase
      .from('bids')
      .select('*, job:jobs(*, designer:profiles!designer_id(*))')
      .eq('maker_id', userId)
      .order('created_at', { ascending: false })

    if (data) {
      setMyBids(data as Bid[])
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400">
            Welcome back, {profile?.display_name || 'User'}!
            <span className="ml-2 text-sm bg-surface-light px-2 py-1 rounded-full">
              {profile?.roles?.includes('designer') ? '🎨 ' : ''}{profile?.roles?.includes('maker') ? '🖨️ ' : ''}{profile?.roles?.includes('ideator') ? '💡' : ''}
            </span>
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-surface">
        <button
          onClick={() => setActiveTab('jobs')}
          className={`pb-3 px-4 font-medium transition-colors ${
            activeTab === 'jobs'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          My Jobs ({myJobs.length})
        </button>
        <button
          onClick={() => setActiveTab('bids')}
          className={`pb-3 px-4 font-medium transition-colors ${
            activeTab === 'bids'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          My Bids ({myBids.length})
        </button>
      </div>

      {/* Jobs Tab */}
      {activeTab === 'jobs' && (
        <div>
          <div className="flex justify-end mb-4">
            <Link
              href="/post-job"
              className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              + Post New Job
            </Link>
          </div>

          {myJobs.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-lg">
              <p className="text-gray-400 mb-4">You haven't posted any jobs yet.</p>
              <Link href="/post-job" className="text-primary hover:underline">
                Post your first job
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {myJobs.map((job) => (
                <div
                  key={job.id}
                  className="p-4 bg-surface rounded-lg border border-surface-light"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Link
                      href={`/jobs/${job.id}`}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      {job.title}
                    </Link>
                    <span className={`text-sm ${statusColors[job.status]}`}>
                      {job.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span>Qty: {job.quantity}</span>
                    <span>Budget: ${job.budget_min} - ${job.budget_max}</span>
                    <span>{job.bids_count} bids</span>
                    <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bids Tab */}
      {activeTab === 'bids' && (
        <div>
          {myBids.length === 0 ? (
            <div className="text-center py-12 bg-surface rounded-lg">
              <p className="text-gray-400 mb-4">You haven't submitted any bids yet.</p>
              <Link href="/jobs" className="text-primary hover:underline">
                Browse open jobs
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {myBids.map((bid) => (
                <div
                  key={bid.id}
                  className={`p-4 rounded-lg border ${
                    bid.status === 'accepted'
                      ? 'border-green-500 bg-green-500/10'
                      : bid.status === 'rejected'
                      ? 'border-red-500 bg-red-500/10 opacity-60'
                      : 'border-surface-light bg-surface'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Link
                        href={`/jobs/${bid.job?.id}`}
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {bid.job?.title}
                      </Link>
                      <div className="text-sm text-gray-400">
                        Your bid: ${bid.price} • {bid.turnaround_days} days
                      </div>
                    </div>
                    <div className="text-right">
                      {bid.status === 'pending' && (
                        <span className="text-yellow-400">Pending</span>
                      )}
                      {bid.status === 'accepted' && (
                        <span className="text-green-400">Accepted ✓</span>
                      )}
                      {bid.status === 'rejected' && (
                        <span className="text-red-400">Rejected</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
