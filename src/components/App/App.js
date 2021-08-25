import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Signup from "../Signup/Signup";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";

import React from "react";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
