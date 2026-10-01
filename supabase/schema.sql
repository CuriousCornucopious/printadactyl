-- Printadactyl Database Schema
-- Run this in your Supabase SQL Editor

-- ============================================
-- USERS PROFILES TABLE
-- ============================================
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  roles TEXT[] NOT NULL DEFAULT ARRAY['explorer']::text[],
  display_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Anyone can view public profiles" 
  ON public.profiles FOR SELECT 
  USING (true);

-- ============================================
-- JOBS TABLE
-- ============================================
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  designer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  material_type TEXT NOT NULL CHECK (material_type IN ('3d_print', 'shirt', 'banner', 'sticker', 'vinyl', 'other')),
  quantity INTEGER NOT NULL,
  deadline DATE NOT NULL,
  budget_min DECIMAL(10,2) NOT NULL,
  budget_max DECIMAL(10,2) NOT NULL,
  design_file_url TEXT,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'bidding_closed', 'in_progress', 'completed', 'cancelled')),
  event_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for jobs
CREATE POLICY "Anyone can view open jobs" 
  ON public.jobs FOR SELECT 
  USING (status = 'open');

CREATE POLICY "Designers can create jobs" 
  ON public.jobs FOR INSERT 
  WITH CHECK (auth.uid() = designer_id);

CREATE POLICY "Designers can update their own jobs" 
  ON public.jobs FOR UPDATE 
  USING (auth.uid() = designer_id);

-- ============================================
-- BIDS TABLE
-- ============================================
CREATE TABLE public.bids (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  maker_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  price DECIMAL(10,2) NOT NULL,
  turnaround_days INTEGER NOT NULL,
  notes TEXT,
  portfolio_link TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.bids ENABLE ROW LEVEL SECURITY;

-- RLS Policies for bids
CREATE POLICY "Anyone can view bids for open jobs" 
  ON public.bids FOR SELECT 
  USING (
    job_id IN (SELECT id FROM public.jobs WHERE status = 'open')
  );

CREATE POLICY "Makers can create bids" 
  ON public.bids FOR INSERT 
  WITH CHECK (auth.uid() = maker_id);

CREATE POLICY "Designers can view bids on their jobs" 
  ON public.bids FOR SELECT 
  USING (
    job_id IN (SELECT id FROM public.jobs WHERE designer_id = auth.uid())
  );

CREATE POLICY "Makers can update their own bids" 
  ON public.bids FOR UPDATE 
  USING (auth.uid() = maker_id);

-- ============================================
-- PROFILE CREATION: Handled by frontend (not trigger)
-- ============================================
-- Profile creation happens in code (app/signup/page.tsx) via an explicit
-- INSERT into public.profiles after auth.signUp() succeeds. This gives us
-- real error messages in the UI instead of generic "Database error" failures.
--
-- The previous handle_new_user trigger was dropped on 2026-10-01 because:
-- 1. It silently failed on JSON parsing of the roles field
-- 2. It made debugging signup impossible from the frontend
-- 3. Errors didn't surface to the user
--
-- See CHRONICLE.md Chapter 3 for the full debugging history.

-- ============================================
-- INDEXES (for better performance)
-- ============================================
CREATE INDEX idx_jobs_designer ON public.jobs(designer_id);
CREATE INDEX idx_jobs_status ON public.jobs(status);
CREATE INDEX idx_jobs_created ON public.jobs(created_at DESC);
CREATE INDEX idx_bids_job ON public.bids(job_id);
CREATE INDEX idx_bids_maker ON public.bids(maker_id);
