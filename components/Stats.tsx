'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function Stats() {
  const [stats, setStats] = useState({ jobs: 0, designers: 0, makers: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createClient()

      // Get job count
      const { count: jobCount } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })

      // Get designer count (profiles with 'designer' role)
      const { data: profiles } = await supabase
        .from('profiles')
        .select('roles')
      
      const designerCount = profiles?.filter(p => p.roles && p.roles.includes('designer')).length || 0

      const makerCount = profiles?.filter(p => p.roles && p.roles.includes('maker')).length || 0

      setStats({
        jobs: jobCount || 0,
        designers: designerCount,
        makers: makerCount,
      })
      setLoading(false)
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-primary">...</div>
          <div className="text-gray-400">Jobs Posted</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">...</div>
          <div className="text-gray-400">Active Designers</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">...</div>
          <div className="text-gray-400">Active Makers</div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-3xl font-bold text-primary">{stats.jobs}+</div>
        <div className="text-gray-400">Jobs Posted</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">{stats.designers}+</div>
        <div className="text-gray-400">Active Designers</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">{stats.makers}+</div>
        <div className="text-gray-400">Active Makers</div>
      </div>
    </div>
  )
}
