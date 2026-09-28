import { Metadata } from 'next'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const defaultMetadata: Metadata = {
  title: {
    default: 'Printadactyl - Your ideas, printed.',
    template: '%s | Printadactyl',
  },
  description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids. Get the best price, quality, and turnaround.',
  keywords: ['3D printing', 'print on demand', 'custom printing', 'marketplace', 'bidding', 'makers'],
  authors: [{ name: 'Printadactyl' }],
  creator: 'Printadactyl',
  publisher: 'Printadactyl',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://printadactyl.com',
    siteName: 'Printadactyl',
    title: 'Printadactyl - Your ideas, printed.',
    description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Printadactyl - Print on Demand Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Printadactyl - Your ideas, printed.',
    description: 'The print-on-demand marketplace where designers post jobs and makers compete with bids.',
    images: ['/og-image.png'],
    creator: '@printadactyl',
  },
  alternates: {
    canonical: 'https://printadactyl.com',
  },
}

export function getSeoMetadata(props?: SeoProps): Metadata {
  if (!props) return defaultMetadata

  const { title, description, image, url } = props

  return {
    ...defaultMetadata,
    title: title ? `${title} | Printadactyl` : defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title ? `${title} | Printadactyl` : defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url: url || defaultMetadata.openGraph?.url,
      images: image
        ? [{ url: image, width: 1200, height: 630 }]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title ? `${title} | Printadactyl` : defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
  }
}

// Page-specific metadata generators
export const homeMetadata = getSeoMetadata({
  title: 'Printadactyl - Your ideas, printed.',
})

export const jobsMetadata = getSeoMetadata({
  title: 'Browse Jobs',
  description: 'Find open print jobs and submit your bids. 3D prints, apparel, marketing materials and more.',
})

export const jobDetailMetadata = (title: string, description: string) =>
  getSeoMetadata({
    title,
    description,
  })

export const loginMetadata = getSeoMetadata({
  title: 'Login',
  description: 'Sign in to your Printadactyl account.',
})

export const signupMetadata = getSeoMetadata({
  title: 'Sign Up',
  description: 'Create a Printadactyl account as a designer or maker.',
})

export const dashboardMetadata = getSeoMetadata({
  title: 'Dashboard',
  description: 'Manage your jobs and bids on Printadactyl.',
})

export const postJobMetadata = getSeoMetadata({
  title: 'Post a Job',
  description: 'Post a new print job and receive competitive bids from makers.',
})
