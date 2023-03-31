import IImage from './IImage';

interface ICharacter {
  id?: number;
  name: string;
  level: string;
  resident: string;
  skills: string;
  about: string;
  reference: string;
  charImages?: IImage[];
}

export default ICharacter;
