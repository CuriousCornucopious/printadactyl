'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function Stats() {
  const [stats, setStats] = useState({ jobs: 0, makers: 0, value: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      const supabase = createClient()

      // Get job count
      const { count: jobCount } = await supabase
        .from('jobs')
        .select('*', { count: 'exact', head: true })

      // Get maker count (profiles with 'maker' role)
      const { data: profiles } = await supabase
        .from('profiles')
        .select('roles')
      
      const makerCount = profiles?.filter(p => p.roles && p.roles.includes('maker')).length || 0

      // Get total bid value as proxy for printed value
      const { data: bids } = await supabase
        .from('bids')
        .select('price')
        .eq('status', 'accepted')
      
      const totalValue = bids?.reduce((sum, b) => sum + (Number(b.price) || 0), 0) || 0

      setStats({
        jobs: jobCount || 0,
        makers: makerCount,
        value: totalValue
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
          <div className="text-gray-400">Active Makers</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-primary">...</div>
          <div className="text-gray-400">Printed Value</div>
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
        <div className="text-3xl font-bold text-primary">{stats.makers}+</div>
        <div className="text-gray-400">Active Makers</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-primary">${stats.value.toLocaleString()}+</div>
        <div className="text-gray-400">Printed Value</div>
      </div>
    </div>
  )
}
