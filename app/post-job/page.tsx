'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { MaterialType } from '@/types'

const materialOptions: { value: MaterialType; label: string; icon: string }[] = [
  { value: '3d_print', label: '3D Print', icon: '🧊' },
  { value: 'shirt', label: 'T-Shirt', icon: '👕' },
  { value: 'banner', label: 'Banner', icon: '🚩' },
  { value: 'sticker', label: 'Sticker', icon: '🧻' },
  { value: 'vinyl', label: 'Vinyl', icon: '📜' },
  { value: 'other', label: 'Other', icon: '✨' },
]

export default function PostJobPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form state
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [materialType, setMaterialType] = useState<MaterialType>('3d_print')
  const [quantity, setQuantity] = useState('')
  const [deadline, setDeadline] = useState('')
  const [budgetMin, setBudgetMin] = useState('')
  const [budgetMax, setBudgetMax] = useState('')

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      router.push('/login')
      return
    }

    // Check if user is a designer
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'designer') {
      // Makers can also post jobs, so we allow it
      // But we could show a warning
    }

    setUser(user)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      router.push('/login')
      return
    }

    setSubmitting(true)
    setError(null)

    const { error: insertError } = await supabase
      .from('jobs')
      .insert({
        designer_id: user.id,
        title,
        description,
        material_type: materialType,
        quantity: parseInt(quantity),
        deadline,
        budget_min: parseFloat(budgetMin),
        budget_max: parseFloat(budgetMax),
        status: 'open',
      })

    if (insertError) {
      setError(insertError.message)
      setSubmitting(false)
    } else {
      router.push('/dashboard')
    }
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Job Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
            placeholder="e.g., Custom 3D printed figurines for my D&D campaign"
          />
        </div>

        {/* Material type */}
        <div>
          <label className="block text-sm font-medium mb-2">
            What do you need printed? *
          </label>
          <div className="grid grid-cols-3 gap-3">
            {materialOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setMaterialType(option.value)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  materialType === option.value
                    ? 'border-primary bg-primary/10'
                    : 'border-surface-light hover:border-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{option.icon}</div>
                <div className="font-medium">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Deadline */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium mb-2">
              Quantity *
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              min="1"
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
              placeholder="10"
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium mb-2">
              Deadline *
            </label>
            <input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Budget */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budgetMin" className="block text-sm font-medium mb-2">
              Minimum Budget ($) *
            </label>
            <input
              id="budgetMin"
              type="number"
              value={budgetMin}
              onChange={(e) => setBudgetMin(e.target.value)}
              required
              min="1"
              step="0.01"
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
              placeholder="50"
            />
          </div>
          <div>
            <label htmlFor="budgetMax" className="block text-sm font-medium mb-2">
              Maximum Budget ($) *
            </label>
            <input
              id="budgetMax"
              type="number"
              value={budgetMax}
              onChange={(e) => setBudgetMax(e.target.value)}
              required
              min="1"
              step="0.01"
              className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
              placeholder="200"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Detailed Description *
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={6}
            className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
            placeholder="Describe your project in detail. Include materials, colors, sizes, any special instructions..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {submitting ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </div>
  )
}
