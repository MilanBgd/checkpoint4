import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
