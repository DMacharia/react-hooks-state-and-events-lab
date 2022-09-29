import React, { useState } from "react";

function Item({ name, category }) {
	const [itemInCart, setItemInCart] = useState(false);

	const inCart = itemInCart ? "in-cart" : "";

	function handleCart() {
		setItemInCart((itemInCart) => !itemInCart);
	}

	return (
		<li className={inCart}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button onClick={handleCart} className="add">
				{itemInCart ? "Add to Cart" : "Remove From Cart"}
			</button>
		</li>
	);
}

export default Item;
