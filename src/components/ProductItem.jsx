import React from 'react';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

import '../styles/ProductItem.scss';

import addCartIcon from '_icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log(item);
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price} valor </p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
