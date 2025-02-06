import SideNav from "@/components/sidenav";


export default function GamesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-48 md:mr-20">
            <SideNav />
        </div>
        <div className="inline-block max-w-lg text-center justify-center md:ml-40">
          {children}
        </div>
        </div>
    );
  }
  