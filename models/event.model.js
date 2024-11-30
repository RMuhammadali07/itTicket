module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Event_types",
        key: "id",
      },
    },
    human_category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Human_categories",
        key: "id",
      },
    },
    venue_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Venues",
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
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Event_type, {
      foreignKey: "event_type_id",
      as: "event_type",
    });
    Event.belongsTo(models.Human_category, {
      foreignKey: "human_category_id",
      as: "human_category",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.Language, {
      foreignKey: "lang_id",
      as: "language",
    });
    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "ticket",
    });
    // Event.hasMany(models.Event_cart, {
    //   foreignKey: "customer_id",
    //   as: "customer_cart",
    // });
  };

  return Event;
};