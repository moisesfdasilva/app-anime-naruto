import Character from '../entities/Character';

interface CharacterRepository{
  getAll(): Promise<Character[]>;
}

export default CharacterRepository;
