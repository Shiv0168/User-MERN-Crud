import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavigationBar = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <div className="text-light">Users</div>
          <Nav className="m-auto">
            <NavLink className="nav-link" to="/add">
              Add
            </NavLink>
            <NavLink className="nav-link" to="/">
              View All
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      {children}
    </div>
  );
};

export default NavigationBar;
