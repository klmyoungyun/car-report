"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export function YoutubeEmbed({
  videoId,
  title,
  channel,
}: {
  videoId: string;
  title: string;
  channel: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="relative aspect-video bg-black">
        {loaded ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            className="group absolute inset-0 flex items-center justify-center"
            onClick={() => setLoaded(true)}
            aria-label={`${title} 재생`}
          >
            <Image
              src={thumb}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              unoptimized
            />
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-600/90 text-white transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 fill-white" />
            </span>
          </button>
        )}
      </div>
      <div className="p-3">
        <div className="line-clamp-2 text-sm font-medium">{title}</div>
        <div className="mt-1 text-xs text-muted-foreground">{channel}</div>
      </div>
    </div>
  );
}
