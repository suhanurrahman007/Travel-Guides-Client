import { Navbar } from "@/src/components/UI/navbar";
import "@/src/styles/globals.css";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative  flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
