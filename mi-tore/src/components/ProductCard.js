import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {CartContext} from '../CartContext.js';

function ProductCard(props) {
	// This props comes from Store.js props.product is product we are selling
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product.id);

	return (
		<Card>
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<Card.Text>${product.price}</Card.Text>

				{productQuantity > 0
					? <>
						<Form as={Row}>
							<Form.Label column='true' sm='6'>
              In Cart: {productQuantity}</Form.Label>
							<Col sm='6'>
								<Button sm='6' onClick={() => cart.addOneToCart(product.id)} className='mx-2'>+</Button>
								<Button sm='6' onClick={() => cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
							</Col>
						</Form>
						<Button variant='danger' onClick={() => cart.deleteFromCart(product.id) }className='my-2'> Remove from Cart</Button>
					</>
					: <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
				}
			</Card.Body>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default ProductCard;
