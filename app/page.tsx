import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md fade-in">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            THE
            <br />
            LEARNED
            <br />
            <span className="flex items-center">
              <span className="text-6xl">λ</span>AMBDA
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 mb-8">
            Elevate your learning experience with our Premium personalized platform.
            Track courses, manage notes, and optimize your study schedule.
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-[hsl(var(--sidebar))] hover:bg-[hsl(var(--sidebar))/90]">
              <Link href="/login">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex-1 auth-bg flex items-center justify-center p-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 fade-in">
          <h2 className="text-2xl font-bold mb-6 text-center">Experience The Difference</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="h-8 w-8 rounded-full course-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Personalized Courses</h3>
                <p className="text-sm text-gray-500">Curated learning paths just for you</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="h-8 w-8 rounded-full test-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Smart Testing</h3>
                <p className="text-sm text-gray-500">Track your progress with adaptive tests</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="h-8 w-8 rounded-full todo-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Study Scheduler</h3>
                <p className="text-sm text-gray-500">Optimize your learning routine</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="h-8 w-8 rounded-full subscription-card flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Flexible Plans</h3>
                <p className="text-sm text-gray-500">Choose what works best for you</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <Button asChild className="w-full bg-[hsl(var(--sidebar))] hover:bg-[hsl(var(--sidebar))/90]">
              <Link href="/login">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}