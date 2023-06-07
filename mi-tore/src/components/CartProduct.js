import Button from 'react-bootstrap/Button';
import {useContext} from 'react';
import {CartContext} from '../CartContext.js';
import {getProduceData} from '../productsStore.js';

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProduceData(id);

	return (
		<>
			<h3>{productData.title}</h3>
			<p>{quantity} total</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>
			<Button size='sm' onClick={() => cart.deleteFromCart(id)}>Romove</Button>
			<hr></hr>
		</>
	);
}

export default CartProduct;
