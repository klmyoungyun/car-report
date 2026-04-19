import { ThumbsUp, ThumbsDown } from "lucide-react";

export function ProsConsList({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-lg border border-ev/30 bg-ev/5 p-4">
        <div className="flex items-center gap-2 font-semibold text-ev mb-3">
          <ThumbsUp className="h-4 w-4" />
          장점
        </div>
        <ul className="space-y-1.5 text-sm">
          {pros.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-ev">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-red-300 bg-red-50 p-4">
        <div className="flex items-center gap-2 font-semibold text-red-700 mb-3">
          <ThumbsDown className="h-4 w-4" />
          단점
        </div>
        <ul className="space-y-1.5 text-sm">
          {cons.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-red-500">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
