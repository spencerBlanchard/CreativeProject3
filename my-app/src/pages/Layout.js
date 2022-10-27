import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h1>Howdy and welcome to the website</h1>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Hack">Hack</Link>
          </li>
          <li>
            <Link to="/Explode">Explode</Link>
          </li>
          <li>
            <Link to="/Win">Win</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
