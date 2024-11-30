module.exports = (sequelize, DataTypes) => {
  const Customer_address = sequelize.define("Customer_address", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Customers",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Countries",
        key: "id",
      },
    },
    region_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Regions",
        key: "id",
      },
    },
    district_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Districts",
        key: "id",
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Flats",
        key: "id",
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_index: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Customer_address.associate = (models) => {
    Customer_address.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Customer_address.belongsTo(models.Country, {
      foreignKey: "country_id",
      as: "country",
    });
    Customer_address.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Customer_address.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
    Customer_address.belongsTo(models.Flat, {
      foreignKey: "flat_id",
      as: "flat",
    });
  };

  return Customer_address;
};
