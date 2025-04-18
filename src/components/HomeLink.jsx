import { Container, Row, Col, Card } from "react-bootstrap"

const HomeLink = function () {
  return (
    <Container fluid className="my-4">
      <h2 className="text-light">Altro da esplorare</h2>
      <Row className="g-2">
        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2">
            <Card.Body className="text-danger fs-4 d-flex justify-content-between">
              Esplora per genere
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Decenni
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Attività e stati d'animo
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Worldwide
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Classifiche
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Audio Spaziale
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Video Musicali
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Nuovi Artisti
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger d-flex justify-content-between">
              Hit del passato
              <i className="bi bi-chevron-right"></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeLink
