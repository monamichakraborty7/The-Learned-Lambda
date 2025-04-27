'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd validate inputs and call an API
    // This is just a mock implementation for the demo
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: isLogin ? "Logged in successfully" : "Account created successfully",
      description: "Redirecting to dashboard...",
    });

    // Simulate API call delay
    setTimeout(() => {
      router.push('/dashboard');
    }, 1500);
  };

  return (
    <main className="min-h-screen auth-bg flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full fade-in">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">
            {isLogin ? 'LOGIN OR SIGN-UP' : 'CREATE ACCOUNT'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Id:</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com" 
              required 
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Password:</Label>
              {isLogin && (
                <Link href="/forgot-password" className="text-xs text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[hsl(var(--sidebar))] hover:bg-[#0b0427]"
          >
            {isLogin ? "Let's Begin" : "Create Account"}
          </Button>

          <div className="text-center text-sm mt-4">
            {isLogin ? (
              <p>
                Don&apos;t have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setIsLogin(false)} 
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => setIsLogin(true)} 
                  className="text-blue-600 hover:underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}