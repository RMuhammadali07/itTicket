module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tickets",
        key: "id",
      },
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Customers",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fineshedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Statuses",
        key: "id"
      }
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "booking",
    });
  };

  return Cart;
};
