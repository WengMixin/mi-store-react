import {Row, Col} from 'react-bootstrap';
import {productsArrays, getProduceData} from '../productsStore.js';
// [{...}, {...}, {,,,}]
import ProductCard from '../components/ProductCard.js';

/**
 * @typedef ProductObject
 * @property {string} id
 * @property {string} title
 * @property {number} price
 */

function Store() {
	return (
		<>
			<h1 align='center' className='p-3'>Welcome to the store!!</h1>
			<Row xs={1} md={3} className='g-4'>
				{productsArrays.map(
					/** @param {ProductObject} product */
					(product, idx) => (
						<Col align='center' key={idx}>
							<ProductCard product={product}></ProductCard>
						</Col>
					),
				)}
			</Row>
		</>

	);
}

export default Store;
