'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Job, MaterialType } from '@/types'

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

export default function JobsPage() {
  const supabase = createClient()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<MaterialType | 'all'>('all')

  useEffect(() => {
    fetchJobs()
  }, [filter])

  const fetchJobs = async () => {
    setLoading(true)
    let query = supabase
      .from('jobs')
      .select('*, designer:profiles!designer_id(*)')
      .eq('status', 'open')
      .order('created_at', { ascending: false })

    if (filter !== 'all') {
      query = query.eq('material_type', filter)
    }

    const { data, error } = await query

    if (!error && data) {
      setJobs(data as Job[])
    }
    setLoading(false)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Open Jobs</h1>
        <Link
          href="/post-job"
          className="px-4 py-2 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Post a Job
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === 'all'
              ? 'bg-primary text-background'
              : 'bg-surface hover:bg-surface-light'
          }`}
        >
          All
        </button>
        {Object.entries(materialLabels).map(([value, label]) => (
          <button
            key={value}
            onClick={() => setFilter(value as MaterialType)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === value
                ? 'bg-primary text-background'
                : 'bg-surface hover:bg-surface-light'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Jobs list */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading jobs...</div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 mb-4">No open jobs found.</p>
          <Link href="/post-job" className="text-primary hover:underline">
            Be the first to post a job
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/jobs/${job.id}`}
              className="block p-6 bg-surface rounded-lg border border-surface-light hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <span className={`text-sm ${statusColors[job.status]}`}>
                  {job.status.replace('_', ' ')}
                </span>
              </div>
              <p className="text-gray-400 mb-4 line-clamp-2">{job.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-surface-light px-3 py-1 rounded-full">
                  {materialLabels[job.material_type]}
                </span>
                <span>Qty: {job.quantity}</span>
                <span>Budget: ${job.budget_min} - ${job.budget_max}</span>
                <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
              </div>
              {job.designer && (
                <p className="text-sm text-gray-500 mt-3">
                  Posted by {job.designer.display_name}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
