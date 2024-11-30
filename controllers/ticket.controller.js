const { Ticket, Event, Seat, Status, Ticket_type } = require("../models");
const { validateTicket } = require("../validations/ticket.validation");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findAll();
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Ticket_type,
          as: "ticket_type",
        },
        {
          model: Event,
          as: "event",
        },
        {
          model: Seat,
          as: "seat",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");
    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    const ticketData = ticket.toJSON();

    await ticket.destroy();
    res.status(204).send(ticketData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
