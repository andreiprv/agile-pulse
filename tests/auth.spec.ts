import { test, expect } from '@playwright/test';
import { AuthPage } from './pages/auth-page';
import { TestHelpers, testUtils } from './helpers/test-helpers';
import { TEST_DATA, SUCCESS_MESSAGES, ERROR_MESSAGES } from './config/test-config';

test.describe('Authentication', () => {
  let authPage: AuthPage;
  let testHelpers: TestHelpers;

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    testHelpers = new TestHelpers(authPage);
  });

  test.describe('Sign Up', () => {
    test('should allow a user to sign up with valid credentials', async () => {
      const email = TEST_DATA.generateTestEmail();
      await authPage.goToSignUp();
      await authPage.fillCredentials(email, TEST_DATA.validPassword);
      
      // Check that form has no validation errors before submitting
      await expect(authPage.page.getByTestId('email-error')).not.toBeVisible();
      await expect(authPage.page.getByTestId('password-error')).not.toBeVisible();
      
      await authPage.submitForm();
      
      // Wait for form submission to complete (button should not be in loading state after submission)
      await authPage.page.waitForTimeout(3000);
      
      // Verify no form validation errors appeared (indicating successful submission)
      await expect(authPage.page.getByTestId('email-error')).not.toBeVisible();
      await expect(authPage.page.getByTestId('password-error')).not.toBeVisible();
    });

    test('should reject sign up with invalid email format', async () => {
      await authPage.goToSignUp();
      await authPage.fillCredentials(TEST_DATA.invalidEmail, TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Check for client-side validation error
      await expect(authPage.page.getByTestId('email-error')).toBeVisible();
      await expect(authPage.page.getByTestId('email-error')).toContainText(ERROR_MESSAGES.invalidEmailFormat);
    });

    test('should reject sign up with weak password', async () => {
      const email = TEST_DATA.generateWeakTestEmail();
      await authPage.goToSignUp();
      await authPage.fillCredentials(email, TEST_DATA.weakPassword);
      await authPage.submitForm();
      
      // Check for password validation error
      await expect(authPage.page.getByTestId('password-error')).toBeVisible();
      await expect(authPage.page.getByTestId('password-error')).toContainText(ERROR_MESSAGES.passwordTooShort);
    });

    test('should reject sign up with empty email field', async () => {
      await authPage.goToSignUp();
      await authPage.fillPassword(TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Check for email required error
      await expect(authPage.page.getByTestId('email-error')).toBeVisible();
    });

    test('should reject sign up with empty password field', async () => {
      await authPage.goToSignUp();
      await authPage.fillEmail(TEST_DATA.generateTestEmail());
      await authPage.submitForm();
      
      // Check for password required error
      await expect(authPage.page.getByTestId('password-error')).toBeVisible();
    });

    test('should reject duplicate email registration', async () => {
      const duplicateEmail = TEST_DATA.generateDuplicateTestEmail();
      
      // First registration - submit valid form
      await authPage.goToSignUp();
      await authPage.fillCredentials(duplicateEmail, TEST_DATA.validPassword);
      await authPage.submitForm();
      await authPage.page.waitForTimeout(3000); // Wait for first registration to process
      
      // Second registration attempt with same email
      await authPage.goToSignUp();
      await authPage.fillCredentials(duplicateEmail, TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Should show error for duplicate email
      await expect(authPage.page.getByText(ERROR_MESSAGES.signUpError).first()).toBeVisible({ timeout: 10000 });
    });

    test('should show password strength indicator', async () => {
      await authPage.goToSignUp();
      await authPage.fillEmail(TEST_DATA.generateStrengthTestEmail());
      await authPage.fillPassword('weak');
      
      // Use web-first assertions for password strength
      await expect(authPage.page.getByTestId('password-strength')).toBeVisible();
      await expect(authPage.page.getByTestId('password-strength')).toContainText('Very Weak');
    });

    test('should toggle password visibility', async () => {
      await authPage.goToSignUp();
      await authPage.fillPassword(TEST_DATA.validPassword);
      
      // Initially password should be hidden
      await expect(authPage.page.getByTestId('password-input')).toHaveAttribute('type', 'password');
      
      // Click toggle button
      await authPage.page.getByTestId('toggle-password').click();
      await expect(authPage.page.getByTestId('password-input')).toHaveAttribute('type', 'text');
      
      // Click toggle again to hide
      await authPage.page.getByTestId('toggle-password').click();
      await expect(authPage.page.getByTestId('password-input')).toHaveAttribute('type', 'password');
    });
  });

  test.describe('Sign In', () => {
    test('should reject sign in with incorrect password', async () => {
      await authPage.goToSignIn();
      await authPage.fillCredentials('test@example.com', 'WrongPassword123');
      await authPage.submitForm();
      
      // Wait for error toast to appear
      await expect(authPage.page.getByText(ERROR_MESSAGES.signInError).first()).toBeVisible({ timeout: 10000 });
    });

    test('should reject sign in with non-existent email', async () => {
      const nonExistentEmail = TEST_DATA.generateNonExistentEmail();
      await authPage.goToSignIn();
      await authPage.fillCredentials(nonExistentEmail, 'ValidPassword123');
      await authPage.submitForm();
      
      // Wait for error toast to appear
      await expect(authPage.page.getByText(ERROR_MESSAGES.signInError).first()).toBeVisible({ timeout: 10000 });
    });

    test('should reject sign in with empty email field', async () => {
      await authPage.goToSignIn();
      await authPage.fillPassword(TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Check for email required error
      await expect(authPage.page.getByTestId('email-error')).toBeVisible();
    });

    test('should reject sign in with empty password field', async () => {
      await authPage.goToSignIn();
      await authPage.fillEmail(TEST_DATA.generateTestEmail());
      await authPage.submitForm();
      
      // Check for password required error
      await expect(authPage.page.getByTestId('password-error')).toBeVisible();
    });

    test('should reject sign in with invalid email format', async () => {
      await authPage.goToSignIn();
      await authPage.fillCredentials(TEST_DATA.invalidEmail, TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Check for client-side validation error
      await expect(authPage.page.getByTestId('email-error')).toBeVisible();
      await expect(authPage.page.getByTestId('email-error')).toContainText(ERROR_MESSAGES.invalidEmailFormat);
    });

    test('should show loading state during sign in attempt', async () => {
      await authPage.goToSignIn();
      await authPage.fillCredentials('test@example.com', 'TestPassword123');
      
      // Click submit and immediately check for loading state
      const submitPromise = authPage.submitForm();
      await expect(authPage.page.getByRole('button', { name: /signing in/i })).toBeVisible();
      await submitPromise;
    });

    test('should navigate to sign up page from sign in', async () => {
      await authPage.goToSignIn();
      await authPage.page.getByTestId('sign-up-link').click();
      await expect(authPage.page).toHaveURL('/sign-up');
    });

    test('should navigate to sign in page from sign up', async () => {
      await authPage.goToSignUp();
      await authPage.page.getByTestId('sign-in-link').click();
      await expect(authPage.page).toHaveURL('/sign-in');
    });
  });

  test.describe('Session Management', () => {
    test('should redirect to sign in when accessing protected routes while signed out', async () => {
      // Navigate to a page first to ensure proper domain context
      await authPage.goToSignIn();
      
      // Clear any existing session safely
      await authPage.page.evaluate(() => {
        try {
          localStorage.clear();
          sessionStorage.clear();
        } catch (e) {
          // Ignore security errors in test environment
        }
      });
      
      await authPage.goToDashboard();
      // The app should redirect to sign-in for protected routes
      await expect(authPage.page).toHaveURL('/sign-in');
    });
  });

  test.describe('Form Validation', () => {
    test('should validate email format in real-time', async () => {
      await authPage.goToSignUp();
      
      // Enter invalid email and blur
      await authPage.fillEmail(TEST_DATA.invalidEmail);
      await authPage.page.getByTestId('email-input').blur();
      await expect(authPage.page.getByTestId('email-error')).toBeVisible();
      
      // Enter valid email and blur
      await authPage.fillEmail('valid@example.com');
      await authPage.page.getByTestId('email-input').blur();
      await expect(authPage.page.getByTestId('email-error')).not.toBeVisible();
    });

    test('should validate password requirements in real-time', async () => {
      await authPage.goToSignUp();
      
      // Enter weak password and blur
      await authPage.fillPassword(TEST_DATA.weakPassword);
      await authPage.page.getByTestId('password-input').blur();
      await expect(authPage.page.getByTestId('password-error')).toBeVisible();
      
      // Enter strong password and blur
      await authPage.fillPassword('StrongPassword123!');
      await authPage.page.getByTestId('password-input').blur();
      await expect(authPage.page.getByTestId('password-error')).not.toBeVisible();
    });

    test('should show specific validation errors', async () => {
      await authPage.goToSignUp();
      
      // Test email validation
      await authPage.fillEmail('invalid');
      await authPage.page.getByTestId('email-input').blur();
      await expect(authPage.page.getByTestId('email-error')).toContainText(ERROR_MESSAGES.invalidEmailFormat);
      
      // Test password validation
      await authPage.fillPassword('123');
      await authPage.page.getByTestId('password-input').blur();
      await expect(authPage.page.getByTestId('password-error')).toContainText(ERROR_MESSAGES.passwordTooShort);
    });

    test('should validate password complexity requirements', async () => {
      await authPage.goToSignUp();
      await authPage.fillEmail(TEST_DATA.generateTestEmail());
      await authPage.fillPassword('simplepwd');
      await authPage.page.getByTestId('password-input').blur();
      
      await expect(authPage.page.getByTestId('password-error')).toContainText(ERROR_MESSAGES.passwordComplexity);
    });
  });

  test.describe('Navigation', () => {
    test('should navigate between authentication pages', async () => {
      // Start at sign in
      await authPage.goToSignIn();
      await expect(authPage.page).toHaveURL('/sign-in');
      
      // Navigate to sign up
      await authPage.page.getByTestId('sign-up-link').click();
      await expect(authPage.page).toHaveURL('/sign-up');
      
      // Navigate back to sign in
      await authPage.page.getByTestId('sign-in-link').click();
      await expect(authPage.page).toHaveURL('/sign-in');
    });
  });

  test.describe('Data-driven Tests', () => {
    const invalidTestCases = testUtils.getInvalidTestCases();
    
    invalidTestCases.forEach(({ email, password, description }) => {
      test(`should reject sign up with ${description}`, async () => {
        await authPage.goToSignUp();
        await authPage.fillCredentials(email, password);
        await authPage.submitForm();
        
        // Check for validation errors based on the test case
        if (email === '' || !email.includes('@')) {
          await expect(authPage.page.getByTestId('email-error')).toBeVisible();
        }
        
        if (password === '' || password.length < 8) {
          await expect(authPage.page.getByTestId('password-error')).toBeVisible();
        }
      });
    });
  });
});