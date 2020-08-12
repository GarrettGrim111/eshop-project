import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>

      {/* <Route exact path="/jackets" component={Jackets} />
        <Route exact path="/sneakers" component={Sneakers} />
        <Route exact path="/mens" component={Mens} />
        <Route exact path="/womens" component={Womens} />
        <Route exact path="/not-found" component={NotFound} /> */}
    </div>
  );
}

export default App;
