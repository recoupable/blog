import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge — pill component aligned with DESIGN.md §5.
 *
 * Uses radius-pill (9999px), 12px font, weight 500, and token-tinted
 * backgrounds (no CSS border — shadow-border or solid-tint instead).
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-muted text-muted-foreground",
        outline:
          "text-foreground bg-transparent shadow-[0px_0px_0px_1px_var(--border)]",
        success: "bg-[rgba(34,197,94,0.08)] text-[#16a34a]",
        warning: "bg-[rgba(245,158,11,0.08)] text-[#d97706]",
        destructive:
          "bg-[rgba(239,68,68,0.08)] text-destructive",
        info: "bg-sky text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
