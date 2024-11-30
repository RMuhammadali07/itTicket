module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Gender.associate = (models) => {
    Gender.hasMany(models.Human_category, {
      foreignKey: "gender_id",
      as: "human_category",
    });
    Gender.hasMany(models.Customer, {
      foreignKey: "gender_id",
      as: "customer",
    });
  };

  return Gender;
};
