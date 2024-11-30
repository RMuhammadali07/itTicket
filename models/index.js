const Sequelize = require("sequelize");
const sequelize = require("../config/database");


const Venue_type = require("./venue_type.model")(sequelize, Sequelize)
const Region = require("./region.model")(sequelize, Sequelize)
const District = require("./district.model")(sequelize, Sequelize)
const Venue = require("./venue.model")(sequelize, Sequelize)
const Seat_type = require("./seat_type.model")(sequelize, Sequelize)
const Sector = require("./sector.model")(sequelize, Sequelize)
const Seat = require("./seat.model")(sequelize, Sequelize)
const Admin = require("./admin.model")(sequelize, Sequelize)
const Country = require("./country.model")(sequelize, Sequelize)
const Status = require("./status.model")(sequelize, Sequelize)
const Gender = require("./gender.model")(sequelize, Sequelize)
const Language = require("./language.model")(sequelize, Sequelize)
const Delivery = require("./delivery.model")(sequelize, Sequelize)
const Discount = require("./discount.model")(sequelize, Sequelize)
const Payment = require("./payment.model")(sequelize, Sequelize)
const Human_category = require("./human_category.model")(sequelize, Sequelize)
const Event_type = require("./event_type.model")(sequelize, Sequelize)
const Venue_photo = require("./venue_photo.model")(sequelize, Sequelize)
const Customer = require("./customer.model")(sequelize, Sequelize)
const Customer_address = require("./customer_address.model")(sequelize, Sequelize)
const Flat = require("./flat.model")(sequelize, Sequelize)
const Customer_cart = require("./customer_cart.model")(sequelize, Sequelize)
const Ticket_type = require("./ticket_type.model")(sequelize, Sequelize)
const Event = require("./event.model")(sequelize, Sequelize)
const Ticket = require("./ticket.model")(sequelize, Sequelize)
const Cart = require("./cart.model")(sequelize, Sequelize)
const Booking = require("./booking.model")(sequelize, Sequelize)


Venue_type.associate(sequelize.models)
Region.associate(sequelize.models)
District.associate(sequelize.models)
Venue.associate(sequelize.models)
Seat_type.associate(sequelize.models)
Sector.associate(sequelize.models)
Seat.associate(sequelize.models)
Admin.associate(sequelize.models)
Country.associate(sequelize.models)
Status.associate(sequelize.models)
Gender.associate(sequelize.models)
Language.associate(sequelize.models)
Delivery.associate(sequelize.models)
Discount.associate(sequelize.models)
Payment.associate(sequelize.models)
Human_category.associate(sequelize.models)
Event_type.associate(sequelize.models)
Venue_photo.associate(sequelize.models)
Customer.associate(sequelize.models)
Customer_address.associate(sequelize.models)
Flat.associate(sequelize.models)
Customer_cart.associate(sequelize.models)
Ticket_type.associate(sequelize.models)
Event.associate(sequelize.models)
Ticket.associate(sequelize.models)
Cart.associate(sequelize.models)
Booking.associate(sequelize.models)


module.exports = {
  sequelize,
  Venue_type,
  Region,
  District,
  Venue,
  Seat_type,
  Sector,
  Seat,
  Admin,
  Country,
  Status,
  Gender,
  Language,
  Delivery,
  Discount,
  Payment,
  Human_category,
  Event_type,
  Venue_photo,
  Customer,
  Customer_address,
  Flat,
  Customer_cart,
  Ticket_type,
  Event,
  Ticket,
  Cart,
  Booking,
};
