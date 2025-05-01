export type SummaryItemType = {
  icon: string;
  score: number;
  category: string;
};

const BgColors = {
  Reaction: 'bg-[hsla(0,100%,67%,0.1)]',
  Memory: 'bg-[hsla(39,100%,56%,0.1)]',
  Verbal: 'bg-[hsla(166,100%,37%,0.1)]',
  Visual: 'bg-[hsla(234,85%,45%,0.1)]',
} as const;

const TextColors = {
  Reaction: 'text-[hsl(0,100%,67%)]',
  Memory: 'text-[hsl(39,100%,56%)]',
  Verbal: 'text-[hsl(166,100%,37%)]',
  Visual: 'text-[hsl(234,85%,45%)]',
} as const;

export default function SummaryItem(props: SummaryItemType) {
  const bgColor = BgColors[props.category as keyof typeof BgColors] || 'bg-red-500';
  const textColor = TextColors[props.category as keyof typeof TextColors] || 'text-red-100';
  return (
    <div className={`flex items-center justify-between rounded-lg p-3 ${bgColor}`}>
      <div className="flex gap-2">
        <img src={props.icon} alt={`${props.category} icon`} />
        <p className={`${textColor}`}>{props.category}</p>
      </div>
      <p className="font-bold text-neutral-light-lavender">
        <strong className="text-neutral-dark-gray-blue">{props.score}</strong> / 100
      </p>
    </div>
  );
}
