import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Form from "./components/Form";


const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Card />
    <Form />
  </div>
);

export default App;
