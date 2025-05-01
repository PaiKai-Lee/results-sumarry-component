export default function ResultSummary({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-6 md:basis-[50%]">
      <p className="font-bold text-neutral-dark-gray-blue md:text-2xl">Summary</p>
      <div className="flex flex-col gap-4">{children}</div>
      <button className="w-full cursor-pointer rounded-full bg-neutral-dark-gray-blue py-3 font-bold text-white transition-colors duration-75 hover:bg-linear-to-b hover:from-light-slate-blue hover:to-light-royal-blue">
        Continue
      </button>
    </div>
  );
}
