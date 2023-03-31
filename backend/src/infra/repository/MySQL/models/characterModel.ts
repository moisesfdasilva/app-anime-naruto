import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class CharacterModel extends Model {
  declare readonly id: number;
  declare name: string;
  declare level: string;
  declare resident: string;
  declare skills: string;
  declare about: string;
  declare reference: string;
}

CharacterModel.init({
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
  reference: { type: STRING },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'characters',
});

export default CharacterModel;
