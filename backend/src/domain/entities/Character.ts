import ICharacter from '../interfaces/ICharacter';

class Character {
  protected id: number | undefined;
  protected name: string;
  protected level: string;
  protected resident: string;
  protected skills: string;
  protected about: string;
  protected reference: string;

  constructor(character: ICharacter) {
    this.id = character.id;
    this.name = character.name;
    this.level = character.level;
    this.resident = character.resident;
    this.skills = character.skills;
    this.about = character.about;
    this.reference = character.reference;
  }
}

export default Character;
