import React from "react";
import ReactDOM from "react-dom";

import {
  Redirect,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import { useGlobalHook, routerHook } from "./logic/router";

import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";

export const routerHook = {}; // this is your global object containing the state and setState hook. You import this into components from which you want to route to a url

// we can call this the global hook constructor, which binds the local hook to our global object.
// we need to export this aswell
export const useGlobalHook = () => {
  const [state, setState] = useState(null);

  // bind state and dispatch
  routerHook.url = state;
  routerHook.routeTo = setState; // choose your own key names if you wish

  return [state, setState]; // return the bound reference back to caller.. so yeah.. callback
};

const App = () => {
  const [state] = useGlobalHook(null);
  const handleClick = () => {
    routerHook.routeTo("/about");
    console.log(routerHook.url);
  };
  const handleClick2 = () => {
    routerHook.routeTo("/contact");
    console.log(routerHook.url);
  };
  return (
    <>
      <Router>
        {routerHook.url ? <Redirect to={routerHook.url} /> : ""}
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>

      <button onClick={handleClick} />
      <button onClick={handleClick2} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


// https://codesandbox.io/s/react-router-demo-hook-routing-forked-jjz7n?file=/src/index.js