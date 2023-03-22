class Character {
  private _id?: number;
  private _name: string;
  private _level: string;
  private _resident: string;
  private _skills: string;
  private _about: string;
  private _image1: string;
  private _image2: string;
  private _page: string;

  constructor(
    name: string,
    level: string,
    resident: string,
    skills: string,
    about: string,
    image1: string,
    image2: string,
    page: string,
    id?: number,
  ) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._resident = resident;
    this._skills = skills;
    this._about = about;
    this._image1 = image1;
    this._image2 = image2;
    this._page = page;
  }
}

export default Character;
