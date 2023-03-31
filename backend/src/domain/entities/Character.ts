import ICharacter from '../interfaces/ICharacter';
import IImage from '../interfaces/IImage';

class Character {
  protected id: number | undefined;
  protected name: string;
  protected level: string;
  protected resident: string;
  protected skills: string;
  protected about: string;
  protected reference: string;
  public charImages: IImage[] | undefined;

  constructor(character: ICharacter) {
    this.id = character.id;
    this.name = character.name;
    this.level = character.level;
    this.resident = character.resident;
    this.skills = character.skills;
    this.about = character.about;
    this.reference = character.reference;
    this.charImages = character.charImages;
  }
}

export default Character;
