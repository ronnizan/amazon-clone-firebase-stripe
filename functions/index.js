const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { stripeSKForFunctions } = require("../src/secrets");
const stripe = require("stripe")(stripeSKForFunctions);


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
