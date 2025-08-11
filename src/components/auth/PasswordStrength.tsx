import { calculatePasswordStrength, getPasswordStrengthLabel, getPasswordStrengthColor } from "@/lib/auth-validation";

interface PasswordStrengthProps {
  password: string;
  className?: string;
}

export const PasswordStrength = ({ password, className = "" }: PasswordStrengthProps) => {
  const strength = calculatePasswordStrength(password);
  const label = getPasswordStrengthLabel(strength);
  
  // Don't show anything if password is empty
  if (!password) {
    return null;
  }

  return (
    <div className={`space-y-2 ${className}`} data-testid="password-strength">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-2 flex-1 rounded-full transition-colors ${
              strength >= level 
                ? getPasswordStrengthColor(strength)
                : "bg-md-surface-variant"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-md-on-surface-variant">
          Password strength: <span className={`font-medium ${
            strength <= 1 ? "text-red-600" : 
            strength <= 2 ? "text-orange-600" :
            strength <= 3 ? "text-yellow-600" : "text-green-600"
          }`}>
            {label}
          </span>
        </span>
      </div>
      {strength < 3 && (
        <div className="text-xs text-md-on-surface-variant">
          <p>Tips for a stronger password:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            {password.length < 8 && <li>Use at least 8 characters</li>}
            {!/[a-z]/.test(password) && <li>Include lowercase letters</li>}
            {!/[A-Z]/.test(password) && <li>Include uppercase letters</li>}
            {!/\d/.test(password) && <li>Include numbers</li>}
            {!/[^A-Za-z0-9]/.test(password) && <li>Include special characters</li>}
          </ul>
        </div>
      )}
    </div>
  );
};