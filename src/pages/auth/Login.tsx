import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import AuthLayout from './AuthLayout';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { supabase } from '@/integrations/supabase/client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      // Set auth data in localStorage for session persistence
      localStorage.setItem('isLoggedIn', 'true');
      
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in.",
      });
      
      // Redirect to home page
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSocialLogin = async (provider: 'google' | 'apple') => {
    setSocialLoading(provider);
    
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) throw error;
      
      // We don't need to set auth data here as the redirect will happen
      
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: `${provider} login failed. ${error.message}`,
        variant: "destructive",
      });
      setSocialLoading(null);
    }
  };
  
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to continue your magical journey"
    >
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || socialLoading !== null}
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <Link 
              to="/auth/forgot-password" 
              className="text-xs text-primary hover:underline"
            >
              Forgot?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading || socialLoading !== null}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading || socialLoading !== null}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-2 text-muted-foreground">or continue with</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialLogin('google')}
            disabled={isLoading || socialLoading !== null}
            className="relative"
          >
            <FcGoogle className="mr-2 h-4 w-4" />
            Google
            {socialLoading === 'google' && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => handleSocialLogin('apple')}
            disabled={isLoading || socialLoading !== null}
            className="relative"
          >
            <FaApple className="mr-2 h-4 w-4" />
            Apple
            {socialLoading === 'apple' && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </Button>
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link to="/auth/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
