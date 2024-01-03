import "./App.css";
import { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { getRace, races } from "./classes/race";
import { AbilityScoreModifier } from "./classes/abilityScore";

export default function App() {
  const [race, setRace] = useState("");
  const selectedRace = getRace(race);

  return (
    <div>
      <label>
        Select your race
        <Dropdown
          optionList={races}
          onChange={handleRaceDropdownChange}
        />
        <p>{selectedRace?.name}</p>
        {selectedRace?.abilityScoreModifiers.map(
          (abilityScore: AbilityScoreModifier, key: any) => (
            <li key={key}>{abilityScore.abilityScoreModifier}</li>
          )
        )}
      </label>
    </div>
  );

  function handleRaceDropdownChange(event: any) {
    event.preventDefault();
    setRace(event.target.value);
  }
}
