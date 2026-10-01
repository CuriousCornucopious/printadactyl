'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SettingsPage() {
  const router = useRouter()
  const supabase = createClient()
  
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [displayName, setDisplayName] = useState('')
  
  // Roles checkboxes
  const [canDesign, setCanDesign] = useState(false)
  const [canMake, setCanMake] = useState(false)
  const [hasIdeas, setHasIdeas] = useState(false)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
    
    if (user) {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (data) {
        setProfile(data)
        setDisplayName(data.display_name || '')
        setCanDesign(data.roles?.includes('designer') || false)
        setCanMake(data.roles?.includes('maker') || false)
        setHasIdeas(data.roles?.includes('ideator') || false)
      }
    }
    setLoading(false)
  }

  const handleSave = async () => {
    if (!user) {
      router.push('/login')
      return
    }

    setSaving(true)
    setSaved(false)

    const roles: string[] = []
    if (canDesign) roles.push('designer')
    if (canMake) roles.push('maker')
    if (hasIdeas) roles.push('ideator')

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: displayName,
        roles: roles,
      })
      .eq('id', user.id)

    if (error) {
      console.error('Error saving profile:', error)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-400">Loading...</p>
      </div>
    )
  }

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
      <p className="text-gray-400 mb-8">Update your profile and capabilities.</p>

      <div className="space-y-6">
        {/* Display Name */}
        <div>
          <label htmlFor="displayName" className="block text-sm font-medium mb-2">
            Display Name
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-surface-light rounded-lg focus:outline-none focus:border-primary"
            placeholder="Your name"
          />
        </div>

        {/* Roles / Capabilities */}
        <div>
          <label className="block text-sm font-medium mb-3">
            What can you do? (select all that apply)
          </label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-4 bg-surface border border-surface-light rounded-lg cursor-pointer hover:border-gray-600 transition-colors">
              <input
                type="checkbox"
                checked={canDesign}
                onChange={(e) => setCanDesign(e.target.checked)}
                className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-surface-light"
              />
              <div>
                <div className="font-medium">I can design</div>
                <div className="text-sm text-gray-400">Create design files, mockups, artwork</div>
              </div>
            </label>
            
            <label className="flex items-center gap-3 p-4 bg-surface border border-surface-light rounded-lg cursor-pointer hover:border-gray-600 transition-colors">
              <input
                type="checkbox"
                checked={canMake}
                onChange={(e) => setCanMake(e.target.checked)}
                className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-surface-light"
              />
              <div>
                <div className="font-medium">I can make</div>
                <div className="text-sm text-gray-400">Have printers/equipment, can produce physical items</div>
              </div>
            </label>
            
            <label className="flex items-center gap-3 p-4 bg-surface border border-surface-light rounded-lg cursor-pointer hover:border-gray-600 transition-colors">
              <input
                type="checkbox"
                checked={hasIdeas}
                onChange={(e) => setHasIdeas(e.target.checked)}
                className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-surface-light"
              />
              <div>
                <div className="font-medium">I have ideas</div>
                <div className="text-sm text-gray-400">Need help turning ideas into real products</div>
              </div>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        {saved && (
          <div className="p-3 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-sm text-center">
            ✓ Profile saved!
          </div>
        )}
      </div>
    </div>
  )
}
