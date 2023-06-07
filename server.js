// Coffee: price_1NGSAxFMZLNVlpYx6LBVJzO6
// Sunglasses: price_1NGSCfFMZLNVlpYxh2LMNrNZ
// Camera: price_1NGSEkFMZLNVlpYxmUmWWagW
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	process.env.STRIPE_API_KEY);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (request, res) => {
	/*
   * Req.body.items
   * [
   *  {
   *    id:1,
   *    quantity: 3
   *  }
   * ]
   *
   *  stripe wants
   *  [
   *    {
   *      price: xx,
   *      quantity: 3,
   *    }
   *  ]
   */

	console.log(request.body);
	const items = request.body.items;
	const lineItems = [];
	for (const item of items) {
		lineItems.push({
			price: item.id,
			quantity: item.quantity,
		});
	}

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: 'payment',
		success_url: 'http://localhost:3000/success',
		cancel_url: 'http://localhost:3000/cancel',
	});

	res.send(
		JSON.stringify({
			url: session.url,
		}),
	);
});

app.listen(4000, () => console.log('Listening to port 4000!'));
