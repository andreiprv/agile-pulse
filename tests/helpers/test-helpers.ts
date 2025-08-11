import { TEST_DATA } from '../config/test-config';
import { AuthPage } from '../pages/auth-page';

/**
 * Test helper functions for common authentication test patterns
 */
export class TestHelpers {
  constructor(private authPage: AuthPage) {}

  /**
   * Creates a new user and returns their credentials
   * Note: User will need email confirmation to sign in
   */
  async createTestUser(): Promise<{ email: string; password: string }> {
    const email = TEST_DATA.generateTestEmail();
    const password = TEST_DATA.validPassword;
    
    await this.authPage.signUp(email, password);
    // Wait for success message (email confirmation required)
    await this.authPage.page.waitForSelector(':has-text("Account created!")', { timeout: 10000 });
    
    return { email, password };
  }

  /**
   * Creates a test user and clears session, leaving them ready for sign-in tests
   */
  async createTestUserAndClearSession(): Promise<{ email: string; password: string }> {
    const credentials = await this.createTestUser();
    await this.authPage.clearBrowserStorage();
    
    return credentials;
  }

  /**
   * Tests a complete authentication flow (sign up -> clear session -> sign in)
   */
  async testCompleteAuthFlow(email?: string, password?: string) {
    const testEmail = email || TEST_DATA.generateTestEmail();
    const testPassword = password || TEST_DATA.validPassword;

    // Sign up
    await this.authPage.signUp(testEmail, testPassword);
    await this.authPage.expectToBeOnHomePage();

    // Clear session
    await this.authPage.clearBrowserStorage();

    // Sign in
    await this.authPage.signIn(testEmail, testPassword);
    await this.authPage.expectToBeOnHomePage();

    return { email: testEmail, password: testPassword };
  }

  /**
   * Tests form validation with invalid data
   * Now checks for client-side validation instead of server errors
   */
  async testInvalidFormData(page: 'signIn' | 'signUp', email: string, password: string, expectFieldErrors = true) {
    if (page === 'signUp') {
      await this.authPage.goToSignUp();
    } else {
      await this.authPage.goToSignIn();
    }

    await this.authPage.fillCredentials(email, password);
    
    if (expectFieldErrors) {
      // Try to submit and check for validation errors
      await this.authPage.submitForm();
      
      // Check for field-level validation errors
      if (email === '' || !email.includes('@')) {
        await this.authPage.expectEmailErrorToBeVisible();
      }
      
      if (password === '' || password.length < 8) {
        await this.authPage.expectPasswordErrorToBeVisible();
      }
    }
  }

  /**
   * Tests empty field validation
   */
  async testEmptyFieldValidation(page: 'signIn' | 'signUp', field: 'email' | 'password' | 'both') {
    if (page === 'signUp') {
      await this.authPage.goToSignUp();
    } else {
      await this.authPage.goToSignIn();
    }

    switch (field) {
      case 'email':
        await this.authPage.fillPassword(TEST_DATA.validPassword);
        break;
      case 'password':
        await this.authPage.fillEmail(TEST_DATA.generateTestEmail());
        break;
      case 'both':
        // Leave both fields empty
        break;
    }

    await this.authPage.submitForm();
    
    // Check for field-level validation errors
    if (field === 'email' || field === 'both') {
      await this.authPage.expectEmailErrorToBeVisible();
    }
    if (field === 'password' || field === 'both') {
      await this.authPage.expectPasswordErrorToBeVisible();
    }
  }

  /**
   * Tests real-time field validation with react-hook-form
   */
  async testRealTimeValidation(field: 'email' | 'password', invalidValue: string, validValue: string) {
    await this.authPage.goToSignUp();

    if (field === 'email') {
      await this.authPage.fillEmail(invalidValue);
      await this.authPage.blurEmailInput();
      await this.authPage.expectEmailErrorToBeVisible();

      await this.authPage.fillEmail(validValue);
      await this.authPage.blurEmailInput();
      await this.authPage.expectEmailErrorToBeHidden();
    } else {
      await this.authPage.fillPassword(invalidValue);
      await this.authPage.blurPasswordInput();
      await this.authPage.expectPasswordErrorToBeVisible();

      // Use a strong password that meets all requirements
      await this.authPage.fillPassword('StrongPassword123!');
      await this.authPage.blurPasswordInput();
      await this.authPage.expectPasswordErrorToBeHidden();
    }
  }

  /**
   * Tests session persistence across page reloads
   */
  async testSessionPersistence(email: string, password: string) {
    // Sign in
    await this.authPage.signIn(email, password);
    await this.authPage.expectToBeOnHomePage();

    // Reload page
    await this.authPage.reloadPage();
    await this.authPage.expectToBeOnHomePage();
    
    // Verify still authenticated by checking access to protected route
    const authState = await this.authPage.checkAuthenticationState();
    if (authState !== 'authenticated') {
      throw new Error('Session was not persisted across page reload');
    }
  }

  /**
   * Tests expired session handling
   */
  async testExpiredSession(email: string, password: string) {
    // Sign in
    await this.authPage.signIn(email, password);
    await this.authPage.expectToBeOnHomePage();

    // Clear storage to simulate expired session
    await this.authPage.clearBrowserStorage();

    // Try to access protected route
    await this.authPage.goToCreate();
    await this.authPage.expectToBeOnSignInPage();
  }

  /**
   * Tests navigation between auth pages
   */
  async testAuthPageNavigation() {
    // Start at sign in
    await this.authPage.goToSignIn();

    // Navigate to sign up
    await this.authPage.clickSignUpLink();
    await this.authPage.expectToBeOnSignUpPage();

    // Navigate back to sign in
    await this.authPage.clickSignInLink();
    await this.authPage.expectToBeOnSignInPage();
  }

  /**
   * Tests password visibility toggle functionality
   */
  async testPasswordVisibilityToggle() {
    await this.authPage.goToSignUp();

    await this.authPage.fillPassword(TEST_DATA.validPassword);
    await this.authPage.expectPasswordInputType('password');

    await this.authPage.togglePasswordVisibility();
    await this.authPage.expectPasswordInputType('text');

    await this.authPage.togglePasswordVisibility();
    await this.authPage.expectPasswordInputType('password');
  }
}

/**
 * Utility functions for test data generation and common patterns
 */
export const testUtils = {
  /**
   * Generates test data for multiple users
   */
  generateMultipleUsers(count: number) {
    return Array.from({ length: count }, () => ({
      email: TEST_DATA.generateTestEmail(),
      password: TEST_DATA.validPassword
    }));
  },

  /**
   * Generates invalid test cases for form validation
   */
  getInvalidTestCases() {
    return [
      { email: TEST_DATA.invalidEmail, password: TEST_DATA.validPassword, description: 'invalid email format' },
      { email: TEST_DATA.generateTestEmail(), password: TEST_DATA.weakPassword, description: 'weak password' },
      { email: '', password: TEST_DATA.validPassword, description: 'empty email' },
      { email: TEST_DATA.generateTestEmail(), password: '', description: 'empty password' },
      { email: '', password: '', description: 'both fields empty' }
    ];
  },

  /**
   * Sleep utility for debugging
   */
  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};