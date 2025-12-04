import { ReactNode } from "react";
import { Navbar } from "../organisms/navbar";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
}
