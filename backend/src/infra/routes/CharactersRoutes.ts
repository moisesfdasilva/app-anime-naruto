import { Router } from 'express';
import CharacterController from '../controllers/CharacterController';

const CharactersRoutes = Router();

CharactersRoutes.get(
  '/characters',
  (req, res, next) => new CharacterController(req, res, next).getAllCharacters(),
);

export default CharactersRoutes;
