import CharacterRepository from '../domain/repository/CharacterRepository';

class getCharactersUsecase {
  private _repository: CharacterRepository;

  constructor(repository: CharacterRepository) {
    this._repository = repository;
  }

  async execute(): Promise<void> {
    await this._repository.getAll();
  }
}

export default getCharactersUsecase;
