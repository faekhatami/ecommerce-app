import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename="/ecommerce-app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
