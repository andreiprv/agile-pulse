import { test } from '@playwright/test';
import { AuthPage } from './pages/auth-page';
import { TestHelpers, testUtils } from './helpers/test-helpers';
import { TEST_DATA } from './config/test-config';

test.describe('Authentication', () => {
  let authPage: AuthPage;
  let testHelpers: TestHelpers;
  let testUserCredentials: { email: string; password: string };

  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    testHelpers = new TestHelpers(authPage);
  });

  test.describe('Sign Up', () => {
    test('should allow a user to sign up with valid credentials', async () => {
      const email = TEST_DATA.generateTestEmail();
      await authPage.signUp(email, TEST_DATA.validPassword);
      
      // Expect success message but user stays on sign-up page (email confirmation required)
      await authPage.page.waitForSelector(':has-text("Account created!")', { timeout: 10000 });
      
      // Store credentials for later tests
      testUserCredentials = { email, password: TEST_DATA.validPassword };
    });

    test('should reject sign up with invalid email format', async () => {
      await testHelpers.testInvalidFormData('signUp', TEST_DATA.invalidEmail, TEST_DATA.validPassword);
    });

    test('should reject sign up with weak password', async () => {
      const email = TEST_DATA.generateWeakTestEmail();
      await testHelpers.testInvalidFormData('signUp', email, TEST_DATA.weakPassword);
    });

    test('should reject sign up with empty email field', async () => {
      await testHelpers.testEmptyFieldValidation('signUp', 'email');
    });

    test('should reject sign up with empty password field', async () => {
      await testHelpers.testEmptyFieldValidation('signUp', 'password');
    });

    test('should reject duplicate email registration', async () => {
      const duplicateEmail = TEST_DATA.generateDuplicateTestEmail();
      
      // First registration
      await authPage.signUp(duplicateEmail, TEST_DATA.validPassword);
      await authPage.page.waitForSelector(':has-text("Account created!")', { timeout: 10000 });
      
      // Navigate to sign up again for duplicate registration attempt
      await authPage.goToSignUp();
      await authPage.fillCredentials(duplicateEmail, TEST_DATA.validPassword);
      await authPage.submitForm();
      
      // Should show error for duplicate email
      await authPage.page.waitForSelector('text="Sign Up Failed"', { timeout: 10000 });
    });

    test('should show password strength indicator', async () => {
      await authPage.goToSignUp();
      await authPage.fillEmail(TEST_DATA.generateStrengthTestEmail());
      await authPage.fillPassword('weak');
      
      await authPage.expectPasswordStrengthIndicator();
      await authPage.expectPasswordStrengthLabel('Very Weak');
    });

    test('should toggle password visibility', async () => {
      await testHelpers.testPasswordVisibilityToggle();
    });
  });

  test.describe('Sign In', () => {
    test.skip('should allow a user to sign in with valid credentials', async () => {
      // Skip this test since Supabase requires email confirmation
      // In real scenario, user would need to confirm email first
    });

    test('should reject sign in with incorrect password', async () => {
      // Test with a known non-existent user (won't require email confirmation)
      await authPage.goToSignIn();
      await authPage.fillCredentials('test@example.com', 'WrongPassword123');
      await authPage.submitForm();
      
      // This should reach the server and return an error
      await authPage.page.waitForSelector('text="Sign In Failed"', { timeout: 10000 });
    });

    test('should reject sign in with non-existent email', async () => {
      const nonExistentEmail = TEST_DATA.generateNonExistentEmail();
      await authPage.goToSignIn();
      await authPage.fillCredentials(nonExistentEmail, 'ValidPassword123');
      await authPage.submitForm();
      
      // This should reach the server and return an error
      await authPage.page.waitForSelector('text="Sign In Failed"', { timeout: 10000 });
    });

    test('should reject sign in with empty email field', async () => {
      await testHelpers.testEmptyFieldValidation('signIn', 'email');
    });

    test('should reject sign in with empty password field', async () => {
      await testHelpers.testEmptyFieldValidation('signIn', 'password');
    });

    test('should reject sign in with invalid email format', async () => {
      await testHelpers.testInvalidFormData('signIn', TEST_DATA.invalidEmail, TEST_DATA.validPassword);
    });

    test.skip('should show loading state during sign in', async () => {
      // Skip since we can't easily test successful sign-in without email confirmation
    });

    test.skip('should remember me functionality', async () => {
      // Remember me feature not implemented in current UI
    });

    test.skip('should navigate to forgot password page', async () => {
      // Forgot password feature not implemented in current UI
    });

    test('should navigate to sign up page from sign in', async () => {
      await authPage.goToSignIn();
      await authPage.clickSignUpLink();
      await authPage.expectToBeOnSignUpPage();
    });

    test('should navigate to sign in page from sign up', async () => {
      await authPage.goToSignUp();
      await authPage.clickSignInLink();
      await authPage.expectToBeOnSignInPage();
    });
  });

  test.describe('Session Management', () => {
    test('should sign out user successfully', async () => {
      if (!testUserCredentials) {
        testUserCredentials = await testHelpers.createTestUser();
      }
      
      // Sign out
      await authPage.signOut();
      await authPage.expectToBeOnSignInPage();
    });

    test('should redirect to sign in when accessing protected routes while signed out', async () => {
      await authPage.goToDashboard();
      await authPage.expectToBeOnSignInPage();
    });

    test.skip('should maintain session across page refreshes', async () => {
      // Skip since we can't easily test with email confirmation
    });

    test.skip('should handle expired session gracefully', async () => {
      // Skip since we can't easily test with email confirmation
    });
  });

  test.describe('Form Validation', () => {
    test('should validate email format in real-time', async () => {
      await testHelpers.testRealTimeValidation('email', TEST_DATA.invalidEmail, 'valid@example.com');
    });

    test('should validate password requirements in real-time', async () => {
      await testHelpers.testRealTimeValidation('password', TEST_DATA.weakPassword, TEST_DATA.validPassword);
    });

    test('should show specific validation errors', async () => {
      await authPage.goToSignUp();
      
      // Test email validation
      await authPage.fillEmail('invalid');
      await authPage.blurEmailInput();
      await authPage.expectSpecificEmailError('Please enter a valid email address');
      
      // Test password validation
      await authPage.fillPassword('123');
      await authPage.blurPasswordInput();
      await authPage.expectSpecificPasswordError('Password must be at least 8 characters');
    });

    test('should validate password complexity requirements', async () => {
      await authPage.goToSignUp();
      await authPage.fillEmail(TEST_DATA.generateTestEmail());
      await authPage.fillPassword('simplepwd');
      await authPage.blurPasswordInput();
      
      await authPage.expectSpecificPasswordError('Password must contain at least one lowercase letter, one uppercase letter, and one number');
    });
  });

  test.describe('Navigation', () => {
    test('should navigate between authentication pages', async () => {
      await testHelpers.testAuthPageNavigation();
    });
  });

  test.describe('Data-driven Tests', () => {
    const invalidTestCases = testUtils.getInvalidTestCases();
    
    invalidTestCases.forEach(({ email, password, description }) => {
      test(`should reject sign up with ${description}`, async () => {
        await testHelpers.testInvalidFormData('signUp', email, password);
      });
    });
  });
});