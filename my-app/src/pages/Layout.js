import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    {/*
      <nav>
      <h1>Welcome to Creative Project #3! We created a wordle-ish game. Good luck!</h1>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Hack">Hack</Link>
          </li>
          <li>
            <Link to="/Win">Win</Link>
          </li>
        </ul>
      </nav>
      
      */}


      <Outlet />
    </>
  )
};

export default Layout;
