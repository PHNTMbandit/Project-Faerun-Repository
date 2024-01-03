import {
  AbilityScoreModifier,
  Charisma,
  Constitution,
  Dexterity,
  Intelligence,
  Strength,
  Wisdom,
} from "./abilityScore";

export abstract class Race {
  public abstract get name(): string;
  public abstract get subRaces(): SubRace[];
  public abstract get abilityScoreModifiers(): AbilityScoreModifier[];
}

abstract class SubRace {
  public abstract get name(): string;
  public abstract get abilityScoreBonuses(): AbilityScoreModifier[];
}

export class Dwarf extends Race {
  public get name(): string {
    return "Dwarf";
  }
  public get subRaces(): SubRace[] {
    return [new HillDwarf(), new MountainDwarf()];
  }
  public get abilityScoreModifiers(): AbilityScoreModifier[] {
    return [new AbilityScoreModifier(new Constitution(), 2)];
  }
}

class HillDwarf extends SubRace {
  public get name(): string {
    return "Hill Dwarf";
  }

  public get abilityScoreBonuses(): AbilityScoreModifier[] {
    return [new AbilityScoreModifier(new Wisdom(), 1)];
  }
}

class MountainDwarf extends SubRace {
  public get name(): string {
    return "Mountain Dwarf";
  }

  public get abilityScoreBonuses(): AbilityScoreModifier[] {
    return [new AbilityScoreModifier(new Strength(), 1)];
  }
}

export class Human extends Race {
  public get name(): string {
    return "Human";
  }
  public get subRaces(): SubRace[] {
    return [];
  }

  public get abilityScoreModifiers(): AbilityScoreModifier[] {
    return [
      new AbilityScoreModifier(new Dexterity(), 1),
      new AbilityScoreModifier(new Charisma(), 1),
      new AbilityScoreModifier(new Constitution(), 1),
      new AbilityScoreModifier(new Intelligence(), 1),
      new AbilityScoreModifier(new Strength(), 1),
      new AbilityScoreModifier(new Wisdom(), 1),
    ];
  }
}

export const races: Race[] = [new Dwarf(), new Human()];

export const getRace = function (raceName: string) {
  return races.find((i) => i.name == raceName);
};
