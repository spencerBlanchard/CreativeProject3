import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
      <h1>Welcome to Creative Project #3. First, prove you are a human, then solve a wordle-ish type puzzle. If you succeed, you won't blow up!</h1>
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
