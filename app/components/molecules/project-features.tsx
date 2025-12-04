export function ProjectFeatures({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2 text-muted-foreground text-sm">
      {features.map((f, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-primary">▹</span>
          {f}
        </li>
      ))}
    </ul>
  );
}
