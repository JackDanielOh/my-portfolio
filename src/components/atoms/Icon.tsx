interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

export default function Icon({ size = "md", className = "" }: IconProps) {
  // This is a placeholder - you can replace with your preferred icon library
  // like react-icons, heroicons, or lucide-react
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        className="w-full h-full"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Placeholder icon - replace with actual icon paths */}
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}
