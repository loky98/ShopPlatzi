import React from 'react';
import { useState } from 'react';
import '../styles/ProductItem.scss';

import addCart from '_icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	const [cart, setCart] = useState('primero');
	const handleClick = () => {
		setCart('Accion Realizada')
	}
	return (
		<div className="ProductItem">
			<img src={product.images[2]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price} valor </p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addCart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
