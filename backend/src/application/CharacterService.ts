import { ModelStatic } from 'sequelize';
import CharacterModel from '../infra/repository/MySQL/models/characterModel';
import Character from '../domain/entities/Character';
import ICharacter from '../domain/interfaces/ICharacter';

class CharacterService {
  protected model: ModelStatic<CharacterModel> = CharacterModel;

  private createCharacterDomain(character: ICharacter | null): Character | null {
    if (character) {
      return new Character(character);
    }
    return null;
  }

  public async getAllCharacters() {
    const allCharacters = await this.model.findAll();
    const allCharsDomain = allCharacters.map((char) => this.createCharacterDomain(char));
    return allCharsDomain;
  }
}

export default CharacterService;
