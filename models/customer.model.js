module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Genders",
        key: "id",
      },
    },
    lang_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Languages",
        key: "id",
      },
    },
    hashed_refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Customer.belongsTo(models.Language, {
      foreignKey: "lang_id",
      as: "language",
    });
    Customer.hasMany(models.Customer_address, {
      foreignKey: "customer_id",
      as: "customer_address",
    });
    Customer.hasMany(models.Customer_cart, {
      foreignKey: "customer_id",
      as: "customer_cart",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "cart"
    })
  };

  return Customer;
};
