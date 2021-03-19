import React, {useContext} from 'react';
import {CartContext} from '../contextors/ProductContext';


// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const crt = useContext(CartContext);
	
	const getCartTotal = () => {
		return crt.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{console.log('crt:',crt)}
			{crt.cart.map((item, index) => (
				<Item key={index} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
