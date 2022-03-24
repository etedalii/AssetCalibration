import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import AssetList from "./components/Forms/Asset/AssetList";
import AssetView from "./components/Forms/Asset/AssetView";

function App() {
  return (
    <React.Fragment>
       <Router>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/assetlist" element={<AssetList />}></Route>
          <Route path="/assetview" element={<AssetView />}></Route>
           <Route path="/login" element={<Login/>}></Route>
         </Routes>
       </Router>
    </React.Fragment>
  );
}

export default App;
