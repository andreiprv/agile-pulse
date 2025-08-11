import { Page, expect } from '@playwright/test';
import { AUTH_LOCATORS, AUTH_ROUTES, ERROR_MESSAGES, SUCCESS_MESSAGES, TIMEOUTS } from '../config/test-config';

export class AuthPage {
  constructor(private page: Page) {}

  // Navigation methods
  async goToSignIn() {
    await this.page.goto(AUTH_ROUTES.signIn);
  }

  async goToSignUp() {
    await this.page.goto(AUTH_ROUTES.signUp);
  }

  async goToCreate() {
    await this.page.goto(AUTH_ROUTES.create);
  }

  async goToDashboard() {
    // Use create route since that's our protected route
    await this.page.goto(AUTH_ROUTES.create);
  }

  // Form interaction methods
  async fillEmail(email: string) {
    await this.page.fill(AUTH_LOCATORS.emailInput, email);
  }

  async fillPassword(password: string) {
    await this.page.fill(AUTH_LOCATORS.passwordInput, password);
  }

  async fillCredentials(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
  }

  async submitForm() {
    await this.page.click(AUTH_LOCATORS.submitButton);
  }

  async togglePasswordVisibility() {
    await this.page.click(AUTH_LOCATORS.togglePasswordButton);
  }

  async blurEmailInput() {
    await this.page.locator(AUTH_LOCATORS.emailInput).blur();
  }

  async blurPasswordInput() {
    await this.page.locator(AUTH_LOCATORS.passwordInput).blur();
  }

  // Navigation link methods
  async clickSignUpLink() {
    await this.page.click(AUTH_LOCATORS.signUpLink);
  }

  async clickSignInLink() {
    await this.page.click(AUTH_LOCATORS.signInLink);
  }

  // Complete authentication flows
  async signUp(email: string, password: string) {
    await this.goToSignUp();
    await this.fillCredentials(email, password);
    await this.submitForm();
  }

  async signIn(email: string, password: string) {
    await this.goToSignIn();
    await this.fillCredentials(email, password);
    await this.submitForm();
  }

  // Assertion methods
  async expectToBeOnHomePage() {
    await expect(this.page).toHaveURL(AUTH_ROUTES.home);
  }

  async expectToBeOnSignInPage() {
    await expect(this.page).toHaveURL(AUTH_ROUTES.signIn);
  }

  async expectToBeOnSignUpPage() {
    await expect(this.page).toHaveURL(AUTH_ROUTES.signUp);
  }

  async expectToBeOnCreatePage() {
    await expect(this.page).toHaveURL(AUTH_ROUTES.create);
  }

  // Toast message expectations
  async expectToastToBeVisible() {
    await expect(this.page.locator(AUTH_LOCATORS.toast)).toBeVisible();
  }

  async expectErrorToast() {
    await this.expectToastToBeVisible();
    // Check for either sign in or sign up error
    const toast = this.page.locator(AUTH_LOCATORS.toast);
    await expect(toast).toContainText(/(Sign In Failed|Sign Up Failed)/);
  }

  async expectSuccessToast() {
    await this.expectToastToBeVisible();
    const toast = this.page.locator(AUTH_LOCATORS.toast);
    await expect(toast).toContainText(/(Welcome back|Account created)/);
  }

  // Form validation - Using react-hook-form validation
  async expectEmailErrorToBeVisible() {
    await expect(this.page.locator(AUTH_LOCATORS.emailError)).toBeVisible();
  }

  async expectEmailErrorToBeHidden() {
    await expect(this.page.locator(AUTH_LOCATORS.emailError)).not.toBeVisible();
  }

  async expectPasswordErrorToBeVisible() {
    await expect(this.page.locator(AUTH_LOCATORS.passwordError)).toBeVisible();
  }

  async expectPasswordErrorToBeHidden() {
    await expect(this.page.locator(AUTH_LOCATORS.passwordError)).not.toBeVisible();
  }

  async expectSpecificEmailError(message: string) {
    await expect(this.page.locator(AUTH_LOCATORS.emailError)).toContainText(message);
  }

  async expectSpecificPasswordError(message: string) {
    await expect(this.page.locator(AUTH_LOCATORS.passwordError)).toContainText(message);
  }

  async expectLoadingState() {
    await expect(this.page.locator(AUTH_LOCATORS.loadingButton)).toBeVisible();
    // Also check button text changes
    const loadingText = /(Signing in\.\.\.|Signing up\.\.\.)/;
    await expect(this.page.locator(AUTH_LOCATORS.submitButton)).toContainText(loadingText);
  }

  async expectPasswordStrengthIndicator() {
    await expect(this.page.locator(AUTH_LOCATORS.passwordStrength)).toBeVisible();
  }

  async expectPasswordStrengthLabel(label: string) {
    await expect(this.page.locator(AUTH_LOCATORS.passwordStrength)).toContainText(label);
  }

  async expectPasswordInputType(type: 'password' | 'text') {
    const passwordInput = this.page.locator(AUTH_LOCATORS.passwordInput);
    await expect(passwordInput).toHaveAttribute('type', type);
  }

  // Session management methods  
  async clearBrowserStorage() {
    await this.page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  }

  // Check authentication state by attempting to access protected route
  async checkAuthenticationState(): Promise<'authenticated' | 'unauthenticated'> {
    await this.goToCreate();
    await this.page.waitForURL(/\/(sign-in|create)/);
    const currentUrl = this.page.url();
    return currentUrl.includes('/create') ? 'authenticated' : 'unauthenticated';
  }

  async reloadPage() {
    await this.page.reload();
  }

  // Utility methods
  getSubmitButton() {
    return this.page.locator(AUTH_LOCATORS.submitButton);
  }

  getPasswordInput() {
    return this.page.locator(AUTH_LOCATORS.passwordInput);
  }

  getEmailInput() {
    return this.page.locator(AUTH_LOCATORS.emailInput);
  }
}