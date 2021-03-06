import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Form from "./components/Form";
import Login from "./components/Login/Login"


const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Card />
    <Form />
    <Login />
  </div>
);

export default App;
