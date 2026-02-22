import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-[#70BEFA] mb-4">404</h1>
        <h2 className="text-2xl text-white mb-4">Page Not Found</h2>
        <p className="text-[#9C9C9C] mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#222222] border border-[#70BEFA]/30 hover:bg-[#70BEFA]/10 text-white rounded-lg transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
