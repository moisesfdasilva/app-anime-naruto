import ICharacter from '../interfaces/ICharacter';

class Character {
  protected id: number | undefined;
  protected name: string;
  protected level: string;
  protected resident: string;
  protected skills: string;
  protected about: string;
  protected image1: string;
  protected image2: string;
  protected page: string;

  constructor(character: ICharacter) {
    this.id = character.id;
    this.name = character.name;
    this.level = character.level;
    this.resident = character.resident;
    this.skills = character.skills;
    this.about = character.about;
    this.image1 = character.image1;
    this.image2 = character.image2;
    this.page = character.page;
  }
}

export default Character;
