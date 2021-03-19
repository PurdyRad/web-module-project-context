import React, {useContext} from 'react';
import {CartContext} from '../contextors/ProductContext';



const Item = () => {
	const crt = useContext(CartContext);
	return (
		<div className="shopping-cart_item">
			<img src={crt.image} alt={`${crt.title} book`} />


			<div>
				<h1>{crt.title}</h1>
				<p>$ {crt.price}</p>
				<button>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
