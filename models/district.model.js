module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Regions",
            key: "id"
        }
    }
  });

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    District.hasMany(models.Venue, {
      foreignKey: "district_id",
      as: "venue",
    });
    District.hasMany(models.Customer_address, {
      foreignKey: "district_id",
      as: "customer_address",
    });
  };

  
  return District;
};
