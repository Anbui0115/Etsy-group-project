import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import { getAllItems } from "./store/items";
import HomePage from "./components/HomePage/HomePage";
import CreateUserItem from "./components/CreateItem/CreateItemForm";
import UserListing from "./components/Listing/UserListing";
import Footer from './components/Footer/Footer';
import PurchasesReviews from "./components/PurchasesReviews/PurchasesReviews";
import Search from "./components/Search/Search"
import EditItemForm from "./components/EditItem";
import Cart from "./components/Cart/Cart";
import ItemById from "./components/Items/GetItems/ItemById";



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
    dispatch(getAllItems())
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}



        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/search/">
          <Search />
        </Route>
        <Route path="/items/:itemId">
          <ItemById />
        </Route>
        <Route path="/listings" exact={true}>
          <UserListing />
        </Route>
        <Route path="/cart" exact={true}>
          <Cart />
        </Route>
        <Route path="/listings/create" exact={true}>
          <CreateUserItem />
        </Route>
        <Route path="/listing/:itemId/edit" exact={true}>
          <EditItemForm />
        </Route>
        <ProtectedRoute path="/purchases-and-reviews" exact={true}>
          <PurchasesReviews />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
