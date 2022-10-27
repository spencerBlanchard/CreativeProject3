import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h1>Howdy and welcome to the website let's hack it</h1>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Hack">hack</Link>
          </li>
          <li>
            <Link to="/Explode">explode press it yes</Link>
          </li>
          <li>
            <Link to="/Win">win</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
