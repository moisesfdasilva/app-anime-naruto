import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Character extends Model {
  declare readonly id: number;
  declare teamName: string;
  declare name: string;
  declare level: string;
  declare resident: string;
  declare skills: string;
  declare about: string;
  declare image1: string;
  declare image2: string;
  declare page: string;
}

Character.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: { type: STRING },
  level: { type: STRING },
  resident: { type: STRING },
  skills: { type: STRING },
  about: { type: STRING },
  image1: { type: STRING },
  image2: { type: STRING },
  page: { type: STRING },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'characters',
});

export default Character;
