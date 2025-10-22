import SideNav from "@/components/sidenav";

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4 py-8 md:py-16 max-w-7xl mx-auto w-full">
     
      <main className="flex-1 w-full max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  );
}
