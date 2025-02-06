export default function SoftwareDevCVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col items-center w-full h-full">
        {children}
      </div>
    </section>
  );
}
