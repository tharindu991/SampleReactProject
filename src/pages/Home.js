import { Outlet, Link } from "react-router-dom";
import Hello from "../components/Hello";
import Form from "../components/Form";
import ItemList from "../components/ItemList";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <Hello />
      <Form />
      <ItemList />
    </>
  );
};

export default Layout;
