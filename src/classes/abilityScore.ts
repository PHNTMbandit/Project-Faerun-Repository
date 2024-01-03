export abstract class AbilityScore {
  public abstract get name(): string;
  public abstract get description(): string;
}

export class Dexterity extends AbilityScore {
  public get name(): string {
    return "Dexterity";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class Charisma extends AbilityScore {
  public get name(): string {
    return "Charisma";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class Constitution extends AbilityScore {
  public get name(): string {
    return "Constitution";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class Intelligence extends AbilityScore {
  public get name(): string {
    return "Intelligence";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class Strength extends AbilityScore {
  public get name(): string {
    return "Strength";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class Wisdom extends AbilityScore {
  public get name(): string {
    return "Wisdom";
  }
  public get description(): string {
    return "This is a description";
  }
}

export class AbilityScoreModifier {
  private _abilityScore: AbilityScore;
  private _modifier: Number;

  constructor(abilityScore: AbilityScore, modifier: Number) {
    this._abilityScore = abilityScore;
    this._modifier = modifier;
  }

  public get abilityScoreModifier() {
    return `${this._abilityScore.name} +${this._modifier}`;
  }
}
