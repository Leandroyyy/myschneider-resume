interface PilarCardProps {
  title: string;
  description: string;
}

export function PilarCard({ title, description }: PilarCardProps) {
  return (
    <span className="flex flex-col items-center w-96 border shadow-xl rounded-xl gap-3 p-6">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-center">{description}</p>
    </span>
  );
}
