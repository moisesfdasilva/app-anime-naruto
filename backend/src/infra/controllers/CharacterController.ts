import { NextFunction, Request, Response } from 'express';
import CharacterService from '../../application/CharacterService';

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

  public async getAllCharacters() {
    const allCharacters = await this._service.getAllCharacters();
    return this._res.status(200).json(allCharacters);
  }
}

export default CharacterController;