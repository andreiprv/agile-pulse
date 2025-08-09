import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Material Design 3 Core Colors
				md: {
					primary: 'hsl(var(--md-primary))',
					'on-primary': 'hsl(var(--md-on-primary))',
					'primary-container': 'hsl(var(--md-primary-container))',
					'on-primary-container': 'hsl(var(--md-on-primary-container))',
					secondary: 'hsl(var(--md-secondary))',
					'on-secondary': 'hsl(var(--md-on-secondary))',
					'secondary-container': 'hsl(var(--md-secondary-container))',
					'on-secondary-container': 'hsl(var(--md-on-secondary-container))',
					error: 'hsl(var(--md-error))',
					'on-error': 'hsl(var(--md-on-error))',
					'error-container': 'hsl(var(--md-error-container))',
					'on-error-container': 'hsl(var(--md-on-error-container))',
					surface: 'hsl(var(--md-surface))',
					'on-surface': 'hsl(var(--md-on-surface))',
					'surface-variant': 'hsl(var(--md-surface-variant))',
					'on-surface-variant': 'hsl(var(--md-on-surface-variant))',
					outline: 'hsl(var(--md-outline))',
					'outline-variant': 'hsl(var(--md-outline-variant))',
					background: 'hsl(var(--md-background))',
					'on-background': 'hsl(var(--md-on-background))',
				},
				
				// Core UI colors using CSS custom properties (shadcn compatibility)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Agile Pulse semantic colors (now using MD3 tokens)
				retro: {
					positive: 'hsl(var(--retro-positive))',
					neutral: 'hsl(var(--retro-neutral))',
					negative: 'hsl(var(--retro-negative))',
					highlight: 'hsl(var(--retro-highlight))',
					'card-bg': 'hsl(var(--retro-card-bg))',
					// Legacy colors for backward compatibility
					green: 'hsl(var(--retro-green))',
					yellow: 'hsl(var(--retro-yellow))',
					red: 'hsl(var(--retro-red))',
					blue: 'hsl(var(--retro-blue))',
					purple: 'hsl(var(--retro-purple))',
					orange: 'hsl(var(--retro-orange))'
				}
			},
			borderRadius: {
				// Material Design 3 border radius tokens
				'md-xs': 'var(--md-radius-xs)',   // 4px
				'md-sm': 'var(--md-radius-sm)',   // 8px
				'md-md': 'var(--md-radius-md)',   // 12px
				'md-lg': 'var(--md-radius-lg)',   // 16px
				'md-xl': 'var(--md-radius-xl)',   // 28px
				'md-full': 'var(--md-radius-full)', // 9999px
				
				// Keep existing for compatibility
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			
			// Material Design 3 spacing tokens (8dp grid)
			spacing: {
				'md-xs': 'var(--md-spacing-xs)',   // 4px
				'md-sm': 'var(--md-spacing-sm)',   // 8px
				'md-md': 'var(--md-spacing-md)',   // 16px
				'md-lg': 'var(--md-spacing-lg)',   // 24px
				'md-xl': 'var(--md-spacing-xl)',   // 32px
				'md-xxl': 'var(--md-spacing-xxl)', // 48px
			},
			
			// Material Design 3 box shadows
			boxShadow: {
				'md-1': 'var(--md-elevation-1)',
				'md-2': 'var(--md-elevation-2)',
				'md-3': 'var(--md-elevation-3)',
			},
			
			// Material Design 3 transitions
			transitionTimingFunction: {
				'md-standard': 'cubic-bezier(0.2, 0, 0, 1)',
			},
			
			transitionDuration: {
				'md-fast': '200ms',
				'md-medium': '300ms',
				'md-slow': '400ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
