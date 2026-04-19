import { ExternalLink } from "lucide-react";

export function BlogLinkCard({
  url,
  title,
  source,
}: {
  url: string;
  title: string;
  source: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col gap-2 rounded-lg border p-4 hover:border-primary/50 hover:bg-accent/50 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-xs font-medium text-primary uppercase tracking-wider">
          {source}
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
      </div>
      <div className="text-sm font-medium line-clamp-3 group-hover:underline">{title}</div>
    </a>
  );
}
