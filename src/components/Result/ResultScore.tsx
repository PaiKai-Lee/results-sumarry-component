export interface ResultScoreProps {
  resultScore: number;
}

export default function ResultScore(props: ResultScoreProps) {
  return (
    <div className="md:-8 flex flex-col items-center gap-4 rounded-b-3xl bg-linear-to-b from-light-slate-blue to-light-royal-blue p-7 md:basis-[50%] md:gap-6 md:rounded-3xl">
      <p className="font-bold text-neutral-light-lavender md:text-xl">Your Result</p>
      <div className="relative flex size-30 items-center justify-center rounded-full bg-linear-to-b from-circle-violet-blue to-circle-persian-blue md:size-42">
        <div className="absolute flex flex-col items-center">
          <p className="text-4xl font-bold text-white md:text-6xl">{props.resultScore}</p>
          <p className="text-sm text-neutral-light-lavender md:text-base md:font-bold">of 100</p>
        </div>
      </div>
      <p className="text-xl font-bold text-white md:text-2xl">Great</p>
      <p className="w-[80%] text-center text-sm text-neutral-light-lavender md:font-bold">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
