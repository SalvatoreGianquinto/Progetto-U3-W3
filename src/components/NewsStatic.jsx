import { Col, Container, Row } from "react-bootstrap"

const NewsStatic = function () {
  return (
    <Container fluid className="ms-1">
      <h1 className="text-light border-0 border-bottom border-secondary-subtle my-3">
        <strong>Novità</strong>
      </h1>

      <div className="overflow-auto d-lg-none">
        <div className="d-flex gap-3">
          <div className="flex-shrink-0">
            <img
              src="../assets/images/1a.png"
              className="img-fluid rounded"
              alt="Slide 1"
              style={{ width: "300px", height: "180px", objectFit: "cover" }}
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="../assets/images/1b.png"
              className="img-fluid rounded"
              alt="Slide 2"
              style={{ width: "300px", height: "180px", objectFit: "cover" }}
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="../assets/images/1c.png"
              className="img-fluid rounded"
              alt="Slide 3"
              style={{ width: "300px", height: "180px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="d-none d-lg-flex gap-3">
        <div className="text-light">
          <h6>Nuova stazione radio</h6>
          <p>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</p>
          <img
            src="../assets/images/1a.png"
            className="img-fluid rounded"
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div className="text-light">
          <h6>Nuova stazione radio</h6>
          <p>Ecco la nuova casa della musica Latina</p>
          <img
            src="../assets/images/1b.png"
            className="img-fluid rounded"
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <h3 className="text-light mt-3">Nuovi episodi radio</h3>
      <div className="container-fluid">
        <Row className="justify-content-start overflow-auto overflow-md-visible">
          <Col xs={4} sm={4} md={2} className="mb-3">
            <img
              src="../assets/images/2a.png"
              className="img-fluid rounded"
              alt="Slide 1"
            />
          </Col>
          <Col xs={4} sm={4} md={2} className="mb-3">
            <img
              src="../assets/images/2b.png"
              className="img-fluid rounded"
              alt="Slide 2"
            />
          </Col>
          <Col xs={4} sm={4} md={2} className="mb-3">
            <img
              src="../assets/images/2c.png"
              className="img-fluid rounded"
              alt="Slide 3"
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3 d-none d-sm-block">
            <img
              src="../assets/images/2d.png"
              className="img-fluid rounded"
              alt="Slide 4"
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3 d-none d-sm-block">
            <img
              src="../assets/images/2e.png"
              className="img-fluid rounded"
              alt="Slide 5"
            />
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3 d-none d-sm-block">
            <img
              src="../assets/images/2f.png"
              className="img-fluid rounded"
              alt="Slide 6"
            />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default NewsStatic
