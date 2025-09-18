import { cn } from "@/lib/utils";

interface TorchProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const Torch = ({ className, size = "md", style }: TorchProps) => {
  const sizeClasses = {
    sm: "w-6 h-12",
    md: "w-8 h-16",
    lg: "w-12 h-24"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)} style={style}>
      {/* Torch base */}
      <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-guild-stone transform -translate-x-1/2 rounded-sm" />
      
      {/* Flame */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-8 bg-gradient-torch rounded-full torch-flame opacity-90" />
        <div className="absolute inset-0 w-4 h-6 bg-guild-ember rounded-full animate-flicker mx-auto mt-1" />
        <div className="absolute inset-0 w-2 h-4 bg-guild-gold rounded-full animate-ember-dance mx-auto mt-2" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute bottom-4 left-1/2 w-8 h-8 bg-guild-ember/20 rounded-full blur-md transform -translate-x-1/2 animate-glow-pulse" />
    </div>
  );
};