export default function CommonLayout({
  children,
  recentPosts,
}: {
  children: React.ReactNode;
  recentPosts: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* {recentPosts} */}
    </>
  );
}
