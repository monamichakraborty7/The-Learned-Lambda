import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, FileText, ListTodo, CreditCard } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Monami!</h1>
        <p className="text-muted-foreground">
          Continue where you left off or explore new courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/dashboard/courses" className="hover-lift">
          <Card className="h-full course-card border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-black">
                <Book className="h-5 w-5" />
                Your Courses
              </CardTitle>
              <CardDescription className="text-black/70 font-medium">
                Hoohooo let&apos;s study!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-32">
                <div className="w-20 h-24 border-2 border-black flex items-center justify-center rounded">
                  <div className="w-16 h-4 bg-black rounded-sm"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        
        <Link href="/dashboard/notes" className="hover-lift">
          <Card className="h-full test-card border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-black">
                <FileText className="h-5 w-5" />
                Your notes and tests
              </CardTitle>
              <CardDescription className="text-black/70 font-medium">
                Time to score yourself!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-32">
                <div className="w-24 h-24 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"></path>
                    <path d="m21 2-9 9-9-9"></path>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

       
        <Link href="/dashboard/todo" className="hover-lift">
          <Card className="h-full todo-card border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-black">
                <ListTodo className="h-5 w-5" />
                Create To-do list
              </CardTitle>
              <CardDescription className="text-black/70 font-medium">
                Plan your study schedule for the day!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-32">
                <div className="space-y-2">
                  <div className="h-1 w-16 bg-black rounded"></div>
                  <div className="h-1 w-16 bg-black rounded"></div>
                  <div className="h-1 w-16 bg-black rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

 
        <Link href="/dashboard/subscription" className="hover-lift">
          <Card className="h-full subscription-card border-none shadow-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-black">
                <CreditCard className="h-5 w-5" />
                Manage subscription
              </CardTitle>
              <CardDescription className="text-black/70 font-medium">
                Modify your current plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-32">
                <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Introduction to Lambda Calculus</CardTitle>
                <CardDescription>8 lessons • 2h 35m</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <div 
                    className="h-full bg-[hsl(var(--sidebar))] rounded-full" 
                    style={{ width: `${30 + i * 20}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {30 + i * 20}% completed
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}