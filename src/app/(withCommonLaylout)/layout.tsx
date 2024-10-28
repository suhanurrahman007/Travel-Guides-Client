import { Navbar } from "@/src/components/ui/navbar";
import "@/src/styles/globals.css";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions)
  return (
    <div className="relative  flex flex-col h-screen">
      <Navbar session={session}/>
      <main>{children}</main>
    </div>
  );
}
