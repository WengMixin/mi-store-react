// Coffee: price_1NGSAxFMZLNVlpYx6LBVJzO6
// Sunglasses: price_1NGSCfFMZLNVlpYxh2LMNrNZ
// Camera: price_1NGSEkFMZLNVlpYxmUmWWagW

const productsArrays = [
	{
		id: 'price_1NGSAxFMZLNVlpYx6LBVJzO6',
		title: 'coffee',
		price: 4.59,
	},
	{
		id: 'price_1NGSCfFMZLNVlpYxh2LMNrNZ',
		title: 'Sunglasses',
		price: 9.99,
	},
	{
		id: 'price_1NGSEkFMZLNVlpYxmUmWWagW',
		title: 'Camera',
		price: 39.99,
	},
];

function getProduceData(id) {
	const produceData = productsArrays.find(product => product.id === id);

	if (produceData === undefined) {
		console.log('Prodect data does not exit for ID:' + id);
		return undefined;
	}

	return produceData;
}

export {productsArrays, getProduceData};
