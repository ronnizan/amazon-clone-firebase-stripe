import React from "react";
import "./Product.css";
import { useStateValue } from "../../context-api/StateProvider";
import { useHistory } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const addToBasket = () => {

    if (!user) {
      history.push("/login");
      return;
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i} style={{ color: "gold" }}> &#9734;</p>
            ))}
        </div>
      </div>

      <img src={image} alt='' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
