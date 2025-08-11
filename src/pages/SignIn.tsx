
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { signInSchema, type SignInFormData } from "@/lib/auth-validation";
import { useAuthErrors } from "@/hooks/use-auth-errors";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleAuthError, handleSuccessfulAuth } = useAuthErrors();

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: SignInFormData) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        handleAuthError(error, 'signin');
      } else {
        handleSuccessfulAuth('signin');
        navigate("/");
      }
    } catch (error) {
      handleAuthError(error as Error, 'signin');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-md-surface">
      <Card className="w-full max-w-sm shadow-md-3">
        <CardHeader>
          <CardTitle className="md-headline-small">Sign In</CardTitle>
          <CardDescription className="md-body-medium text-md-on-surface-variant">
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        autoComplete="email"
                        {...field}
                        data-testid="email-input"
                      />
                    </FormControl>
                    <FormMessage data-testid="email-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          {...field}
                          data-testid="password-input"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                          data-testid="toggle-password"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage data-testid="password-error" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
                data-loading={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="text-sm">
          Don't have an account?{" "}
          <Link 
            to="/sign-up" 
            className="ml-1 underline text-md-primary hover:text-md-primary/80"
            data-testid="sign-up-link"
          >
            Sign Up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
