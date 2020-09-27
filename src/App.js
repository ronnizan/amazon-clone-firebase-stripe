import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./context-api/StateProvider";
import { loadStripe } from "@stripe/stripe-js"; 
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";
import PrivateRoute from "./helpers/Private-Route";
import { stripePKForAppComponent } from "./secrets";

const promise = loadStripe(
  stripePKForAppComponent
);

function App() {
  const [{}, dispatch] = useStateValue(); 

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout" component={Checkout}>
          </PrivateRoute>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
