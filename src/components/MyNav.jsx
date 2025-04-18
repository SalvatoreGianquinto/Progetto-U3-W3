import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

const MyNav = function () {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="d-flex d-lg-none"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-3">
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img src="/music.svg" alt="Music Logo" style={{ width: "100px" }} />{" "}
      </Navbar.Brand>
      <Nav.Link href="#home" className="text-danger me-3">
        Accedi
      </Nav.Link>
    </Navbar>
  )
}

export default MyNav
