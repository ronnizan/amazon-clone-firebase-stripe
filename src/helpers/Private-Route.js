import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStateValue } from "../context-api/StateProvider";
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
