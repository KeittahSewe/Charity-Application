import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Donate from "./Donate";
import Charities from "./Charities";


function App() {
    return (
      <>
        <nav>
          <ul className="Navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/charities">Charities</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/charities" element={<Charities />}></Route>
        </Routes>
      </>
    );
  }
  export default App;