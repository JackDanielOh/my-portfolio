const badgeVariants = {
  variant: {
    primary: "bg-green-900 text-green-300",
    secondary: "bg-gray-700 text-gray-300",
    success: "bg-green-900 text-green-300",
    warning: "bg-yellow-900 text-yellow-300",
    danger: "bg-red-900 text-red-300",
  },
  size: {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  },
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof badgeVariants.variant;
  size?: keyof typeof badgeVariants.size;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${
        badgeVariants.variant[variant]
      } ${badgeVariants.size[size]} ${className || ""}`}
    >
      {children}
    </span>
  );
}
