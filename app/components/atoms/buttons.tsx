import { Button as ShadButton } from "@components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return <ShadButton className="bg-blue-600/70 hover:bg-blue-600/90 backdrop-blur-md text-white" {...props} />;
};
