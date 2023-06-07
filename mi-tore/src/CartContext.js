import {createContext, useState} from 'react';
import {getProduceData} from './productsStore.js';

export const CartContext = createContext({
	items: [],
	getProductQuantity() {},
	addOneToCart() {},
	removeOneFromCart() {},
	deleteFromCart() {},
	getTotalCost() {},
});

export function CartProvider({children}) {
	const [cartProducts, setCartProducts] = useState([]);

	function getProductQuantity(id) {
		// 如果？前面不成立则不执行？后面。
		const quantity = cartProducts.find(product => product.id === id)?.quantity;
		// 如果？不成立，则返回0.而不是返回undefined
		if (quantity === undefined) {
			return 0;
		}

		// 否则，返回正常的quantity的值，应该是数字类型。
		return quantity;
	}

	function addOneToCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity === 0) { // Product is not in cart
			setCartProducts(
				[
					...cartProducts,
					{
						id,
						quantity: 1,
					},
				],
			);
		} else {
			// [{ id:1 , quantity: 3}, {...} ] add to product id of 1
			setCartProducts(
				cartProducts.map((product => product.id === id // If conditions
					? {...product, quantity: product.quantity + 1} // If statement is true
					: product // If statement is false
				)),
			);
		}
	}

	function removeOneFromCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity === 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map((product => product.id === id
					? {...product, quantity: product.quantity - 1}
					: product
				)),
			);
		}
	}

	function deleteFromCart(id) {
		setCartProducts(
			cartProducts =>
				cartProducts.filter(product => product.id !== id),
		);
	}

	function getTotalCost() {
		let totalCost = 0;
		cartProducts.map(cartItem => {
			const productData = getProduceData(cartItem.id);
			totalCost += (productData.price * cartItem.quantity);
		});
		return totalCost;
	}

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getTotalCost,
	};

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
