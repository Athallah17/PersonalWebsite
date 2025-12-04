import { cn } from "@lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={cn("w-full p-4 rounded-xl bg-white/10 backdrop-blur-md text-gray-100 border border-gray-300/20 focus:outline-none focus:ring-2 focus:ring-blue-400", className)} {...props} />;
};
