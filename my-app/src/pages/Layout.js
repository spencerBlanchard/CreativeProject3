import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h1>Howdy and welcome to the website let's hack it</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/hack">hack</Link>
          </li>
          <li>
            <Link to="/explode">explode press it yes</Link>
          </li>
          <li>
            <Link to="/win">win</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
