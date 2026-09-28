'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Job, Bid, MaterialType } from '@/types'

const materialLabels: Record<MaterialType, string> = {
  '3d_print': '3D Print',
  'shirt': 'T-Shirt',
  'banner': 'Banner',
  'sticker': 'Sticker',
  'vinyl': 'Vinyl',
  'other': 'Other',
}

const statusColors = {
  'open': 'text-green-400',
  'bidding_closed': 'text-yellow-400',
  'in_progress': 'text-blue-400',
  'completed': 'text-gray-400',
  'cancelled': 'text-red-400',
}

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const supabase = createClient()
  const jobId = params.id as string

  const [job, setJob] = useState<Job | null>(null)
  const [bids, setBids] = useState<Bid[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [isDesigner, setIsDesigner] = useState(false)

  // Bid form state
  const [showBidForm, setShowBidForm] = useState(false)
  const [bidPrice, setBidPrice] = useState('')
  const [bidTurnaround, setBidTurnaround] = useState('')
  const [bidNotes, setBidNotes] = useState('')
  const [bidPortfolio, setBidPortfolio] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    if (job) {
      fetchBids()
    }
  }, [job])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (profile && job) {
        setIsDesigner(profile.id === job.designer_id)
      }
    }
  }

  const fetchJob = async () => {
    const { data, error } = await supabase
      .from('jobs')
      .select('*, designer:profiles!designer_id(*)')
      .eq('id', jobId)
      .single()

    if (!error && data) {
      setJob(data as Job)
      if (user) {
        setIsDesigner(user.id === data.designer_id)
      }
    }
  }

  const fetchBids = async () => {
    const { data } = await supabase
      .from('bids')
      .select('*, maker:profiles!maker_id(*)')
      .eq('job_id', jobId)
      .order('created_at', { ascending: false })

    if (data) {
      setBids(data as Bid[])
    }
  }

  useEffect(() => {
    if (jobId) {
      fetchJob()
    }
  }, [jobId, user])

  const handleSubmitBid = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      router.push('/login')
      return
    }

    setSubmitting(true)
    setError(null)

    const { error: bidError } = await supabase
      .from('bids')
      .insert({
        job_id: jobId,
        maker_id: user.id,
        price: parseFloat(bidPrice),
        turnaround_days: parseInt(bidTurnaround),
        notes: bidNotes,
        portfolio_link: bidPortfolio,
        status: 'pending',
      })

    if (bidError) {
      setError(bidError.message)
      setSubmitting(false)
    } else {
      setShowBidForm(false)
      fetchBids()
    }
  }

  const handleAcceptBid = async (bidId: string) => {
    // Update bid status to accepted
    await supabase
      .from('bids')
      .update({ status: 'accepted' })
      .eq('id', bidId)

    // Update job status to in_progress
    await supabase
      .from('jobs')
      .update({ status: 'in_progress' })
      .eq('id', jobId)

    // Reject all other bids
    await supabase
      .from('bids')
      .update({ status: 'rejected' })
      .eq('job_id', jobId)
      .neq('id', bidId)

    fetchJob()
    fetchBids()
  }

  if (loading || !job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-400">Loading job...</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back link */}
      <Link href="/jobs" className="text-primary hover:underline mb-6 inline-block">
        ← Back to jobs
      </Link>

      {/* Job details */}
      <div className="bg-surface rounded-lg p-6 mb-8">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <span className={`text-sm ${statusColors[job.status]}`}>
            {job.status.replace('_', ' ')}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <span className="bg-surface-light px-3 py-1 rounded-full">
            {materialLabels[job.material_type]}
          </span>
          <span className="bg-surface-light px-3 py-1 rounded-full">
            Qty: {job.quantity}
          </span>
          <span className="bg-surface-light px-3 py-1 rounded-full">
            Budget: ${job.budget_min} - ${job.budget_max}
          </span>
          <span className="bg-surface-light px-3 py-1 rounded-full">
            Deadline: {new Date(job.deadline).toLocaleDateString()}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-300 whitespace-pre-wrap">{job.description}</p>
        </div>

        {job.designer && (
          <p className="text-sm text-gray-500 mt-6">
            Posted by {job.designer.display_name}
          </p>
        )}
      </div>

      {/* Bid button for makers */}
      {!isDesigner && job.status === 'open' && (
        <div className="mb-8">
          {!showBidForm ? (
            <button
              onClick={() => setShowBidForm(true)}
              className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit a Bid
            </button>
          ) : (
            <form onSubmit={handleSubmitBid} className="bg-surface rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Submit Your Bid</h3>
              
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Price ($)</label>
                  <input
                    type="number"
                    value={bidPrice}
                    onChange={(e) => setBidPrice(e.target.value)}
                    required
                    min="1"
                    step="0.01"
                    className="w-full px-4 py-3 bg-surface-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Turnaround (days)</label>
                  <input
                    type="number"
                    value={bidTurnaround}
                    onChange={(e) => setBidTurnaround(e.target.value)}
                    required
                    min="1"
                    className="w-full px-4 py-3 bg-surface-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="7"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Portfolio Link</label>
                <input
                  type="url"
                  value={bidPortfolio}
                  onChange={(e) => setBidPortfolio(e.target.value)}
                  className="w-full px-4 py-3 bg-surface-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Notes</label>
                <textarea
                  value={bidNotes}
                  onChange={(e) => setBidNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-surface-light border border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Tell them why you're the right maker..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Bid'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowBidForm(false)}
                  className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-surface-light transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Bids section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Bids ({bids.length})
        </h2>
        
        {bids.length === 0 ? (
          <p className="text-gray-400">No bids yet. Be the first to bid!</p>
        ) : (
          <div className="space-y-4">
            {bids.map((bid) => (
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
                    <span className="font-semibold">{bid.maker?.display_name}</span>
                    {bid.status === 'accepted' && (
                      <span className="ml-2 text-green-400 text-sm">✓ Accepted</span>
                    )}
                    {bid.status === 'rejected' && (
                      <span className="ml-2 text-red-400 text-sm">✗ Rejected</span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">${bid.price}</div>
                    <div className="text-sm text-gray-400">{bid.turnaround_days} days</div>
                  </div>
                </div>

                {bid.portfolio_link && (
                  <a
                    href={bid.portfolio_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Portfolio →
                  </a>
                )}

                {bid.notes && (
                  <p className="text-sm text-gray-300 mt-2">{bid.notes}</p>
                )}

                {/* Accept bid button for designer */}
                {isDesigner && bid.status === 'pending' && job.status === 'open' && (
                  <button
                    onClick={() => handleAcceptBid(bid.id)}
                    className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Accept This Bid
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
