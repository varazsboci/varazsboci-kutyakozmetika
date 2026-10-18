import Image from "next/image";
import type { Photo } from "@/types";

interface PhotoCardProps {
  photo: Pick<Photo, "id" | "alt" | "category"> & { url?: string };
  onClick?: () => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative aspect-square overflow-hidden rounded-2xl bg-brand-100 text-left text-xs text-brand-600/60 flex items-center justify-center hover:opacity-90 transition-opacity"
    >
      {photo.url ? (
        <Image
          src={photo.url}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />
      ) : (
        // TODO: amint minden kategóriához lesz valós fotó, ez az ág törölhető
        photo.alt
      )}
    </button>
  );
}
