import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
        <Link
          href="/jobs"
          className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
        >
          Browse Jobs
        </Link>
      </div>
    </div>
  )
}
