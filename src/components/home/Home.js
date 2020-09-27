import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR5O9K5sBUYFydNjeLtGAy_YMg1XZPKZteC6g&usqp=CAU'
          alt=''
        />

        <div className='home__row'>
          <Product
            id='12321341'
            title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal'
            price={39.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg'
          />
          <Product
            id='49538094'
            title='Fjallraven, Kanken Classic Backpack for Everyday'
            price={79.0}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81df6ful9PL._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Fire HD 10 Tablet (10.1" 1080p full HD display, 32 GB) – Black'
            price={109.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/61vUiHar9rL._AC_SL1000_.jpg'
          />
          <Product
            id='23445930'
            title='Ring Rechargeable Battery Pack'
            price={28.99}
            rating={5}
            image='https://images-na.ssl-images-amazon.com/images/I/71hP6o06gdL._AC_SL1500_.jpg'
          />
          <Product
            id='3254354345'
            title='Sabrent 4-Port USB 2.0 Hub with Individual LED lit Power Switches (HB-UMLS)'
            price={8.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/71igbmDJwDL._AC_SL1500_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title="Samsung Galaxy Tab A 10.1 64 GB Wifi Tablet Black (2019)"
            price={229.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/61ndwk9f8DL._AC_SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
