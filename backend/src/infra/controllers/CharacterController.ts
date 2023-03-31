import { NextFunction, Request, Response } from 'express';
import CharacterService from '../../application/CharacterService';
import IImage from '../../domain/interfaces/IImage';

class CharacterController {
  private _req: Request;
  private _res: Response;
  private _next: NextFunction;
  private _service: CharacterService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this._next = next;
    this._service = new CharacterService();
  }

  static charImagesArray(char: IImage[]): string[] {
    const result:string[] = [];
    char.forEach((img) => result.push(img.image));
    return result;
  }

  public async getAllCharacters() {
    const allCharacters = await this._service.getAllCharacters();
    const newAllCharacters = allCharacters.map((char) => {
      return {
        ...char,
        charImages: char === null || char.charImages === undefined ? (
          null) : CharacterController.charImagesArray(char.charImages),
      }
    })
    return this._res.status(200).json(newAllCharacters);
  }
}

export default CharacterController;