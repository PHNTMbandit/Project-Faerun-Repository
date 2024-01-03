import { Race } from "./race";

export class CharacterBuilder {
  character: Character = new Character();

  public addRace(race: Race) {
    this.character.race = race;
  }

  public getCharacter(): Character {
    const character = this.character;

    return character;
  }
}

class Character {
  private _race: any;

  public get race() {
    return this._race;
  }

  public set race(race: Race) {
    this._race = race;
  }
}
