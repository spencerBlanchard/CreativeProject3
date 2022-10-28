import React from "react"
import { Outlet, Link } from "react-router-dom";
import startGame from "../Media/startGame.png"


const Home = () => {


  return (
    <div>
          <h1>Home</h1>
          <Link to="/Hack"><img src={startGame}/></Link>

          
    </div>

  );

};



export default Home;
