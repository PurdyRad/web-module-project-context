import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {CartContext} from '../contextors/ProductContext';

const Navigation = () => {
	const crt = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{crt.cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
