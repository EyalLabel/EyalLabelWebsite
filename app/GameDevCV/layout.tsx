export default function GameDevCVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-2">
      <div className="">
        {children}
      </div>
    </section>
  );
}
