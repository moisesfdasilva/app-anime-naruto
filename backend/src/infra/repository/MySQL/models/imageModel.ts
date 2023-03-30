import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import CharacterModel from './characterModel';

class ImageModel extends Model {
  declare readonly id: number;
  declare charId: number;
  declare image: string;
}

ImageModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  charId: { type: INTEGER },
  image: { type: STRING },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'images',
});

ImageModel.hasMany(CharacterModel, { foreignKey: 'charId', as: 'CharImages'});
CharacterModel.belongsTo(ImageModel, { foreignKey: 'charId', as: 'CharImages'});

export default ImageModel;
