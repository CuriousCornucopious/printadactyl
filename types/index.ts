export type UserRole = 'designer' | 'maker' | 'ideator'

export type UserRoles = UserRole[] // Allow multiple roles

export interface Profile {
  id: string
  email: string
  roles: UserRoles // Array of roles: designer, maker, ideator
  display_name: string
  created_at: string
}

export type JobType = 'print' | 'full' // print = have design, full = need design + print

export type MaterialType = '3d_print' | 'shirt' | 'banner' | 'sticker' | 'vinyl' | 'other'

export type JobStatus = 'open' | 'bidding_closed' | 'in_progress' | 'completed' | 'cancelled'

export interface Job {
  id: string
  designer_id: string
  title: string
  description: string
  material_type: MaterialType
  job_type: JobType
  quantity: number
  deadline: string
  budget_min: number
  budget_max: number
  design_file_url: string | null
  status: JobStatus
  event_type?: string
  created_at: string
  // Joined fields
  designer?: Profile
  bids_count?: number
}

export type BidStatus = 'pending' | 'accepted' | 'rejected'

export interface Bid {
  id: string
  job_id: string
  maker_id: string
  price: number
  design_fee?: number // Optional, for full-service jobs
  turnaround_days: number
  notes: string
  portfolio_link: string
  status: BidStatus
  created_at: string
  // Joined fields
  maker?: Profile
  job?: Job
}

export interface Comment {
  id: string
  job_id: string
  user_id: string
  body: string
  created_at: string
  // Joined fields
  user?: Profile
}

// Form input types (without id, created_at, etc)
export interface CreateJobInput {
  title: string
  description: string
  material_type: MaterialType
  job_type: JobType
  quantity: number
  deadline: string
  budget_min: number
  budget_max: number
  design_file_url?: string
  event_type?: string
}

export interface CreateBidInput {
  job_id: string
  price: number
  design_fee?: number
  turnaround_days: number
  notes: string
  portfolio_link: string
}

export interface CreateProfileInput {
  email: string
  roles: UserRoles
  display_name: string
}
