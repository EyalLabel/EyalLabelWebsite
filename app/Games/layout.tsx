import SideNav from "@/components/sidenav";

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4 py-8 md:py-16 max-w-7xl mx-auto w-full">
      <aside className="hidden md:flex flex-col items-center min-w-[220px] max-w-[260px]">
        <div className="w-full rounded-2xl bg-white/80 dark:bg-gray-900/80 shadow-xl p-6 sticky top-8 z-10">
          <h2 className="text-lg font-bold mb-6 text-center tracking-wide text-primary">Games</h2>
          <SideNav />
        </div>
      </aside>
      <main className="flex-1 w-full max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  );
}
