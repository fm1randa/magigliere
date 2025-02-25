"use client";
import { usePreferences } from "@/stores/preferences";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa6";

export function FavoriteButton() {
  const { toggleFavorite, isFavorite } = usePreferences();
  const { id } = useParams<{ id: string }>();
  const getFavoriteButtonClassnames = () => {
    if (isFavorite(id)) {
      return `flex items-center gap-1 ml-auto mr-2 bg-golden-ochre border-golden-ochre border-solid border rounded-lg p-2`;
    }
    return `flex items-center gap-1 ml-auto mr-2 border-golden-ochre text-golden-ochre border-solid border rounded-lg p-2`;
  };
  return (
    <button
      onClick={() => toggleFavorite(id)}
      className={getFavoriteButtonClassnames()}
    >
      <FaStar /> Favorite
    </button>
  );
}
