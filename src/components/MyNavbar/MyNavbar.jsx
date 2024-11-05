import './MyNavbar.css';
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from 'react-bootstrap';
import { Link, NavLink, redirect } from 'react-router-dom';
import { useState } from 'react';

const EXPAND_BREAKPOINT = 'md';

function MyNavbar({ brandTitle, offCanvasTitle }) {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        {/* <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink> */}
        <Navbar.Brand href="/">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              <Nav.Link
                as="div"
                className="flex-grow-1 text-center border border-dark border-end-0"
              >
                <Link to={'/signin'} state={{ redirect: 'redirectUrl' }}>
                  로그인
                </Link>
              </Nav.Link>
              <Nav.Link className="flex-grow-1 text-center border border-dark">
                <Link to={'/signup'}>회원가입</Link>
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link>
                <Link to={'/'}>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={'/board'}>게시판</Link>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
