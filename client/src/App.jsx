import "./App.css";
import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import AssetList from "./components/Forms/Asset/AssetList";
import AssetView from "./components/Forms/Asset/AssetView";
import Layout from "./components/UI/Card/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/assetlist" element={<AssetList />}></Route>
        <Route path="/assetview" element={<AssetView />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
