'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Mail } from 'lucide-react';

export default function AuthPage() {
  const [tab, setTab] = useState('login');

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl text-gradient-primary">
            Welcome
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access your account or create a new one
          </p>
        </div>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-2 bg-muted/50">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* =========== LOGIN  */}
          <TabsContent value="login">
            <Card className="mt-4 shadow-medium">
              <CardHeader>
                <CardTitle className="font-display">Sign in</CardTitle>
                <CardDescription>
                  Enter your credentials to continue
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="text-right">
                  <button className="text-sm text-accent hover:underline">
                    Forgot password?
                  </button>
                </div>

                <Button className="w-full bg-gradient-accent shadow-accent">
                  Login
                </Button>

                <Separator />

                <div className="space-y-2">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Continue with Google
                  </Button>

                  <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Continue with GitHub
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{' '}
                  <button
                    onClick={() => setTab('register')}
                    className="text-accent hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* =========== REGISTER =========== */}
          <TabsContent value="register">
            <Card className="mt-4 shadow-medium">
              <CardHeader>
                <CardTitle className="font-display">Create account</CardTitle>
                <CardDescription>Fill in the details below</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="register-password">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="Create a strong password"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Repeat password"
                  />
                </div>

                <Button className="w-full bg-gradient-accent shadow-accent">
                  Create account
                </Button>

                <Separator />

                <div className="space-y-2">
                  <Button variant="outline" className="w-full gap-2">
                    <Mail className="h-4 w-4" />
                    Sign up with Google
                  </Button>

                  <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" />
                    Sign up with GitHub
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <button
                    onClick={() => setTab('login')}
                    className="text-accent hover:underline"
                  >
                    Login
                  </button>
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}