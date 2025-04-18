import "bootstrap-icons/font/bootstrap-icons.css"
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap"

const DesktopNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark d-none d-lg-flex">
      <Container fluid>
        <Row className="w-100 align-items-center">
          <Col xs={3} className="d-flex align-items-center gap-3">
            <i className="bi bi-arrow-repeat text-secondary fs-3"></i>
            <i className="bi bi-rewind-fill text-secondary fs-3"></i>
            <i className="bi bi-play-fill text-secondary fs-1"></i>
            <i className="bi bi-fast-forward-fill text-secondary fs-3"></i>
            <i className="bi bi-shuffle text-secondary fs-3"></i>
          </Col>

          <Col xs={4} className="d-flex justify-content-center bg-secondary">
            <Navbar.Brand
              href="#home"
              className="d-flex align-items-center p-1"
            >
              <i className="bi bi-apple text-white fs-2"></i>
            </Navbar.Brand>
          </Col>
          <Col xs={2} className="d-flex align-items-center">
            <i className="bi bi-volume-up-fill text-secosecondary me-2 ms-3"></i>
            <div
              style={{
                width: "200px",
                height: "10px",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "100%",
                  backgroundColor: "#f00",
                  borderRadius: "5px",
                }}
              />
            </div>
          </Col>

          <Col xs={3} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link
                href="#home"
                className="border border-1 border-dark bg-danger text-light d-flex align-items-center"
              >
                <i className="bi bi-person-circle me-1"></i>
                Accedi
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default DesktopNavbar
