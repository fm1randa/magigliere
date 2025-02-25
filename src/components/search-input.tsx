import { useFilters } from "@/stores/filters";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const { query, setQuery } = useFilters();
  return (
    <div className="relative">
      <input
        {...props}
        className={`bg-dark-gray font-normal text-sm rounded-full outline-none pl-3 pr-9 pt-1 pb-1 w-[300px] ${props.className || ""}`}
        placeholder={props.placeholder || "Search"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2" />
    </div>
  );
}
