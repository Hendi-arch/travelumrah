import * as React from "react";
import { cn } from "@/lib/utils";

// Button Variants Logic
type ButtonVariant = "default" | "outline" | "ghost" | "link" | "secondary";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export const buttonVariants = ({
  variant = "default",
  size = "default",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "default",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900": variant === "outline",
      "hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
      "text-slate-900 underline-offset-4 hover:underline": variant === "link",
      "h-10 px-4 py-2": size === "default",
      "h-9 rounded-md px-3": size === "sm",
      "h-11 rounded-md px-8": size === "lg",
      "h-10 w-10": size === "icon",
    },
    className
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
