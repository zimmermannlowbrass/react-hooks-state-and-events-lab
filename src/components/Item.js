import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setToCart] = useState(false)

  const className = inCart ? 'in-cart' : ''

  const buttonDescription = inCart ? 'Remove From Cart' : 'Add to Cart'

  function addToCart() {
    setToCart(inCart => !inCart)
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{buttonDescription}</button>
    </li>
  );
}

export default Item;
