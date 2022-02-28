import React from 'react';
import ProductItem from '_components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';

const URL_API = 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const products = useGetProducts(URL_API);
	return (
		<section className="main-container">
		<h1>ProductList</h1>
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
				
			</div>
		</section>
	);
}

export default ProductList;
