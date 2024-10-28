import { title } from "@/src/components/primitives";
import { authOptions } from "@/src/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function BlogPage() {
  return (
    <div>
      <h1 className={title()}>blog</h1>
    </div>
  );
}
