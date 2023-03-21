import React, { useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {

  const [selectedCategory, setCategorySelection] = useState('All')

  function handleFilterChange(event) {
    setCategorySelection(event.target.value)
  }
  
  const displayitems = items.filter(item =>
    {
      if (selectedCategory === 'All') return true;

      return item.category === selectedCategory

    })
  // console.log(items.filter(item => item.category === 'Dairy'))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange ={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayitems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
