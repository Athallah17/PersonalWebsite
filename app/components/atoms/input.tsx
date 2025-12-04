import { Input as ShadInput } from "@components/ui/input";
import { cn } from "@lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return <ShadInput className={cn("bg-white/10 backdrop-blur-md text-gray-100 border border-gray-300/20", className)} {...props} />;
};

