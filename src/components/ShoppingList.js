import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredItem = items.filter((item) => {
		if (selectedCategory === "All") return true;
		return item.category.includes(selectedCategory);
	});

	return (
		<div className="ShoppingList">
			<div className="Filter">
				<select
					onChange={(e) => setSelectedCategory(e.target.value)}
					name="filter"
					value={selectedCategory}
				>
					<option value="All">Filter by category</option>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</div>
			<ul className="Items">
				{filteredItem.map((item) => (
					<Item
						key={item.id}
						name={item.name}
						category={filteredItem.selectedCategory}
					/>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
