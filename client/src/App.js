import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import DataContext from "./utils/DataContext";
import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Admin from "./pages/Admin";
import Nav from "./components/Nav";
import API from "./utils/API";

function App() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    onLoad();
  },[])

  function onLoad() {
    API.getPlayers()
    .then(res => {
      console.log("whats in res", res)
      setData(res.data)
    })
    .catch(err => console.log("Error: ", err));
  }

  return (
    <DataContext.Provider value={data}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rank" component={Home} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
