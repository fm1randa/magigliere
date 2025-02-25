"use client";

import { usePreferences } from "@/stores/preferences";
import capitalize from "@/utils/capitalize";

function Option({ house }: { house: string }) {
  const { house: preferredHouse, setHouse: setPreferredHouse } =
    usePreferences();
  return (
    <label className="flex gap-2">
      <input
        type="radio"
        name="house"
        value={house}
        checked={house === preferredHouse}
        onChange={(event) => setPreferredHouse(event.target.value)}
      />
      {capitalize(house)}
    </label>
  );
}

export default function Preferences() {
  return (
    <div>
      <h1 className="text-xl font-bold font-harry-beast-display text-golden-ochre">
        Preferences
      </h1>
      <section className="flex flex-col gap-4">
        <label>Choose your preferred house:</label>
        <Option house="gryffindor" />
        <Option house="hufflepuff" />
        <Option house="ravenclaw" />
        <Option house="slytherin" />
      </section>
    </div>
  );
}
