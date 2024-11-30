const { Customer_cart, Customer } = require("../models");
const { validateCustomer_cart } = require("../validations/customer_cart.validation");

exports.createCustomer_cart = async (req, res) => {
  const { error } = validateCustomer_cart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer_cart = await Customer_cart.create(req.body);
    res.status(201).send(customer_cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomer_cart = async (req, res) => {
  try {
    const customer_cart = await Customer_cart.findAll();
    res.status(200).send(customer_cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomer_cartById = async (req, res) => {
  try {
    const customer_cart = await Customer_cart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    if (!customer_cart) return res.status(404).send("Customer_cart not found");
    res.status(200).send(customer_cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer_cart = async (req, res) => {
  const { error } = validateCustomer_cart(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const customer_cart = await Customer_cart.findByPk(req.params.id);
    if (!customer_cart) return res.status(404).send("Customer_cart not found");
    await customer_cart.update(req.body);
    res.status(200).send(customer_cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer_cart = async (req, res) => {
  try {
    const customer_cart = await Customer_cart.findByPk(req.params.id);
    if (!customer_cart) return res.status(404).send("Customer_cart not found");

    const customer_cartData = customer_cart.toJSON();

    await customer_cart.destroy();
    res.status(204).send(customer_cartData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
