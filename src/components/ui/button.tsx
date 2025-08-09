import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-md-fast ease-md-standard overflow-hidden relative",
  {
    variants: {
      variant: {
        // Material Design 3 Button Variants
        filled: "bg-md-primary text-md-on-primary rounded-md-full h-10 px-6 shadow-md-1 hover:shadow-md-2 hover:opacity-92 active:opacity-88",
        outlined: "border border-md-outline bg-transparent text-md-primary rounded-md-full h-10 px-6 hover:bg-md-primary/8",
        text: "bg-transparent text-md-primary rounded-md-full h-10 px-3 hover:bg-md-primary/8",
        elevated: "bg-md-surface text-md-primary rounded-md-full h-10 px-6 shadow-md-1 hover:shadow-md-2",
        tonal: "bg-md-secondary-container text-md-on-secondary-container rounded-md-full h-10 px-6 hover:shadow-md-1 hover:opacity-92",
        
        // Legacy variants for compatibility
        default: "bg-md-primary text-md-on-primary rounded-md-full h-10 px-6 shadow-md-1 hover:shadow-md-2 hover:opacity-92",
        destructive: "bg-md-error text-md-on-error rounded-md-full h-10 px-6 shadow-md-1 hover:shadow-md-2 hover:opacity-92",
        outline: "border border-md-outline bg-transparent text-md-primary rounded-md-full h-10 px-6 hover:bg-md-primary/8",
        secondary: "bg-md-secondary-container text-md-on-secondary-container rounded-md-full h-10 px-6 hover:shadow-md-1 hover:opacity-92",
        ghost: "bg-transparent text-md-primary rounded-md-full h-10 px-3 hover:bg-md-primary/8",
        link: "text-md-primary underline-offset-4 hover:underline bg-transparent rounded-md-full h-10 px-3",
      },
      size: {
        // Material Design 3 standard sizes
        default: "h-10 px-6", // 40dp height, 24dp padding
        sm: "h-8 px-4 text-xs",  // 32dp height, 16dp padding
        lg: "h-12 px-8 text-base", // 48dp height, 32dp padding
        icon: "h-10 w-10 p-0", // Square icon button
        fab: "h-14 w-14 rounded-md-lg shadow-md-3", // Floating Action Button
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
