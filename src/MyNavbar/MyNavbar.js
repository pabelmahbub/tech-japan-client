import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {HashLink} from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import JobPost from '../JobPost/JobPost';
import { Redirect } from 'react-router';
import Login from '../Login/Login';
import useFirebase from '../hooks/useFirebase';

function MyNavbar() {
  const {user,handleSignOut} =useFirebase();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tech-Japan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/developerBlog">Developers</Nav.Link>
          <Nav.Link as={Link} to="/hireBlog">Want to Hire</Nav.Link>
          <Nav.Link as={Link} to="/jobPost">Post Job</Nav.Link>
          {
            user &&  <Nav.Link as={Link} to="/another">Another</Nav.Link>
          }
         
        
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
         
          <Nav>
          <Nav.Link><span>{user?.displayName && user.displayName}</span></Nav.Link>
         
            {
              user ?.uid ? 
              <button onClick={handleSignOut}>Sign Out</button>
              :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
         
         <Nav.Link as={Link} to="/manageJob">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;