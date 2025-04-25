'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Bell, Search, FileText, BookOpen, ListTodo, CreditCard, User, Settings, Moon, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: BookOpen, label: 'Courses', href: '/dashboard' },
    { icon: FileText, label: 'Notes & Tests', href: '/dashboard/notes' },
    { icon: ListTodo, label: 'Todo List', href: '/dashboard/todo' },
    { icon: CreditCard, label: 'Subscription', href: '/dashboard/subscription' },
    { icon: User, label: 'Profile', href: '/dashboard/profile' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
  ];

  function NavList() {
    return (
      <ul className="space-y-2 pt-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-lg transition-colors",
                  isActive 
                    ? "bg-white/20 text-white" 
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation - Mobile */}
      <header className="border-b md:hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 sidebar w-64">
                <div className="flex flex-col h-full text-white">
                  <div className="p-4 border-b border-white/10">
                    <Link 
                      href="/dashboard" 
                      className="flex items-center"
                    >
                      <h2 className="font-bold text-white">
                        <span className="text-2xl">λ</span> Learned Lambda
                      </h2>
                    </Link>
                  </div>
                  <div className="flex-1 p-4">
                    <NavList />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="font-semibold text-lg">
              <span className="text-xl">λ</span> Learned Lambda
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Search..." 
              className="pl-9 bg-gray-100 border-0"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 sidebar">
          <div className="h-full flex flex-col text-white">
            <div className="p-6 border-b border-white/10">
              <Link href="/dashboard" className="flex items-center">
                <h2 className="font-bold text-white">
                  <span className="text-2xl">λ</span> Learned Lambda
                </h2>
              </Link>
            </div>
            <div className="flex-1 p-4">
              <NavList />
            </div>
            <div className="p-4 border-t border-white/10">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark Mode</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col min-h-0">
          {/* Top bar - Desktop */}
          <header className="hidden md:flex items-center justify-between border-b p-4">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search for courses, notes, or tasks..." 
                className="pl-9 bg-gray-100 border-0"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 p-4 md:p-6 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}