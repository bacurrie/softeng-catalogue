import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionIndex from "./pages/CollectionIndex";
import DetailPage from "./pages/DetailPage";
import Navi from "./components/Navi";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Data from "./data/data.json";
import Debug from './pages/Debug';
import React, { useEffect, useState, Component } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {}, [user, login]);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navi user={user} setUser={setUser} setLogin={setLogin} />
          <Route
            exact
            path="/"
            exact
            component={() => <HomePage user={user} />}
          />
          <Route
            path="/login"
            exact
            component={() => <Login setUser={setUser} setLogin={setLogin} />}
          />
          <Route path="/register" exact component={Register} />

          <Route exact path="/index">
            <CollectionIndex />
          </Route>

          <Route exact path="/detail">
            <DetailPage />
          </Route>

          <Route exact path='/debug'>
            <Debug/>
          </Route>

          {Data.map(data => (
            <Route path={data.id}><DetailPage data={data}/></Route>
          ))}

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
