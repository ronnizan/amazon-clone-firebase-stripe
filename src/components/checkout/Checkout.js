import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../../context-api/StateProvider";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import Header from "../header/Header";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header></Header>
      <div className='checkout'>
        <div className='checkout__left'>

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className='checkout__right'>
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
