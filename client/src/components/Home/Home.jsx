import React from "react";
import { useNavigate } from "react-router-dom";
import auth  from '../auth/auth'
const Home = (props) => {
  let navigate = useNavigate();
  const islogin = auth.getToken();
  if(islogin === undefined || !islogin){
    navigate("/login");
  }
  return (
    <React.Fragment>
      <h1>Welcome back!</h1>
    </React.Fragment>
  );
};

export default Home;
