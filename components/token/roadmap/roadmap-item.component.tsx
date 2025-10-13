export default function RoadmapItem({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div className="flex flex-row gap-sm items-center">
      <div
        style={{ backgroundColor: color }}
        className="min-w-[10px] min-h-[10px] rounded-[10px]"
      />
      {text}
    </div>
  );
}
