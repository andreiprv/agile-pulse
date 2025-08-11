export const AUTH_LOCATORS = {
  // Input fields
  emailInput: '[data-testid="email-input"]',
  passwordInput: '[data-testid="password-input"]',
  
  // Buttons
  submitButton: 'button[type="submit"]',
  togglePasswordButton: '[data-testid="toggle-password"]',
  
  // Navigation links
  signUpLink: '[data-testid="sign-up-link"]',
  signInLink: '[data-testid="sign-in-link"]',
  
  // Toast messages (Radix UI toast structure)
  toast: '[data-radix-toast-root]', // Toast root element
  toastTitle: '[data-radix-toast-title]', // Toast title
  toastDescription: '[data-radix-toast-description]', // Toast description
  toastViewport: '[data-radix-toast-viewport]', // Toast container
  
  // Form validation messages
  emailError: '[data-testid="email-error"]',
  passwordError: '[data-testid="password-error"]',
  passwordStrength: '[data-testid="password-strength"]',
  
  // Loading states
  loadingButton: '[data-loading="true"]'
} as const;

export const AUTH_ROUTES = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  create: '/create',  // This is the protected route that exists
  board: '/board'     // Base route for boards (protected)
} as const;

export const TEST_DATA = {
  validPassword: 'password123',
  weakPassword: '123',
  invalidEmail: 'invalid-email',
  wrongPassword: 'wrongpassword',
  
  // Dynamic email generators
  generateTestEmail: () => `testuser_${Date.now()}@example.com`,
  generateWeakTestEmail: () => `weak_${Date.now()}@example.com`,
  generateEmptyPassTestEmail: () => `empty_pass_${Date.now()}@example.com`,
  generateDuplicateTestEmail: () => `duplicate_${Date.now()}@example.com`,
  generateStrengthTestEmail: () => `strength_${Date.now()}@example.com`,
  generateNonExistentEmail: () => `nonexistent_${Date.now()}@example.com`
} as const;

export const ERROR_MESSAGES = {
  signInError: 'Sign In Failed',
  signUpError: 'Sign Up Failed',
  emailRequired: 'Email is required',
  passwordRequired: 'Password is required',
  invalidEmailFormat: 'Please enter a valid email address',
  passwordTooShort: 'Password must be at least 8 characters',
  passwordComplexity: 'Password must contain at least one lowercase letter, one uppercase letter, and one number'
} as const;

export const SUCCESS_MESSAGES = {
  signInSuccess: 'Welcome back!',
  signUpSuccess: 'Account created!'
} as const;

export const TIMEOUTS = {
  default: 5000,
  loading: 10000,
  navigation: 15000
} as const;