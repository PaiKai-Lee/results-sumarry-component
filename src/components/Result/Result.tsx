export default function Result({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden bg-white shadow-lg md:flex md:w-[720px] md:flex-row md:rounded-3xl">
      {children}
    </div>
  );
}
