const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");

const venue_typeRoutes = require("./routes/venue_type.routes");
const regionRoutes = require("./routes/region.routes")
const districtRoutes = require("./routes/district.routes")
const Venue = require("./routes/venue.routes")
const Seat_type = require("./routes/seat_type.routes")
const Sector = require("./routes/sector.routes")
const Seat = require("./routes/seat.routes")
const Flat = require("./routes/flat.routes")
const Admin = require("./routes/admin.routes")
const Country = require("./routes/country.routes")
const Status = require("./routes/status.routes")
const Gender = require("./routes/gender.routes")
const Language = require("./routes/language.routes")
const Delivery = require("./routes/delivery.routes")
const Discount = require("./routes/discount.routes")
const Payment = require("./routes/payment.routes")
const Human_category = require("./routes/human_category.routes")
const Event_type = require("./routes/event_type.routes")
const Venue_photo = require("./routes/venue_photo.routes")
const Customer = require("./routes/customer.routes")
const Customer_address = require("./routes/customer_address.routes")
const Customer_cart = require("./routes/customer_cart.routes")
const Ticket_type = require("./routes/ticket_type.routes")
const Event = require("./routes/event.routes")
const Ticket = require("./routes/ticket.routes")
const Cart = require("./routes/cart.routes")
const Booking = require("./routes/booking.routes")


const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", venue_typeRoutes)
app.use("/api", regionRoutes)
app.use("/api", districtRoutes)
app.use("/api", Venue)
app.use("/api", Seat_type)
app.use("/api", Sector)
app.use("/api", Seat)
app.use("/api", Flat)
app.use("/api", Admin)
app.use("/api", Country)
app.use("/api", Status)
app.use("/api", Gender)
app.use("/api", Language)
app.use("/api", Delivery)
app.use("/api", Discount)
app.use("/api", Payment)
app.use("/api", Human_category)
app.use("/api", Event_type)
app.use("/api", Venue_photo)
app.use("/api", Customer)
app.use("/api", Customer_address)
app.use("/api", Customer_cart)
app.use("/api", Ticket_type)
app.use("/api", Event)
app.use("/api", Ticket)
app.use("/api", Cart)
app.use("/api", Booking)


setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
