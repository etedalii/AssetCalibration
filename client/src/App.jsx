import "./App.scss";
import React, { useContext } from "react";
import Home from "./components/Home/Home";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import AssetList from "./components/Forms/Asset/AssetList";
import AssetView from "./components/Forms/Asset/AssetView";
import Layout from "./components/UI/Layout/Layout";
import AuthContext from "./store/auth-context";
import ManageUserList from "./components/Forms/Users/ManageUserList";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/assetlist"
          element={authCtx.isLoggedIn ? <AssetList /> : <Login />}
        ></Route>
        <Route
          path="/assetview"
          element={authCtx.isLoggedIn ? <AssetView /> : <Login />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/manageuser"
          element={authCtx.isLoggedIn ? <ManageUserList /> : <Login />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/CreateUser" element={<CreateUser />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
