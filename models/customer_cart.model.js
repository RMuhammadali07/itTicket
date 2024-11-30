module.exports = (sequelize, DataTypes) => {
  const Customer_cart = sequelize.define("Customer_cart", {
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  });

  Customer_cart.associate = (models) => {
    Customer_cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });

  };

  return Customer_cart;
};
