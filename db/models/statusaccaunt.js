const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class StatusAccaunt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  StatusAccaunt.init({
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'StatusAccaunt',
  });
  return StatusAccaunt;
};
