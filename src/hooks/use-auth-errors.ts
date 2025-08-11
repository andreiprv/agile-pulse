import { useToast } from "@/hooks/use-toast";
import { AuthError } from "@supabase/supabase-js";

export const useAuthErrors = () => {
  const { toast } = useToast();
  
  const handleAuthError = (error: AuthError | Error, context: 'signin' | 'signup') => {
    const errorMessages: Record<string, string> = {
      'Invalid login credentials': 'Email or password is incorrect',
      'User already registered': 'An account with this email already exists',
      'Password should be at least 6 characters': 'Password must be at least 6 characters long',
      'Invalid email': 'Please enter a valid email address',
      'Email not confirmed': 'Please check your email and click the confirmation link',
      'Signup disabled': 'New registrations are currently disabled',
    };
    
    const message = errorMessages[error.message] || error.message || 'An unexpected error occurred';
    
    toast({
      title: context === 'signin' ? 'Sign In Failed' : 'Sign Up Failed',
      description: message,
      variant: "destructive",
    });
  };
  
  const handleSuccessfulAuth = (type: 'signin' | 'signup') => {
    toast({
      title: type === 'signin' ? 'Welcome back!' : 'Account created!',
      description: type === 'signin' 
        ? 'You have been signed in successfully'
        : 'Please check your email to verify your account',
    });
  };
  
  return { handleAuthError, handleSuccessfulAuth };
};