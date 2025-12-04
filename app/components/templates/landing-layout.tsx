import { Navbar } from "../organisms/navbar";

export default function LandingLayout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
