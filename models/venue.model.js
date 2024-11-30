module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    venue_type_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Venue_types",
            key: "id"
        }
    },
    schema: {
        type: DataTypes.STRING,
        allowNull: false
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
            key: "id"
        }
    }
  });

  Venue.associate = (models) => {
    Venue.belongsTo(models.Venue_type, {
      foreignKey: "venue_type_id",
      as: "venue_type",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seat",
    });
    Venue.hasMany(models.Venue_photo, {
      foreignKey: "venue_id",
      as: "venue_photo",
    });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "event"
    })
  };


  return Venue;
};
