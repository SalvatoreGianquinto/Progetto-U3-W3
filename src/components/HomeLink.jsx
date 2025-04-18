import { Container, Row, Col, Card } from "react-bootstrap"

const HomeLink = function () {
  return (
    <Container fluid className="my-4">
      <h2 className="text-light">Altro da esplorare</h2>
      <Row className="g-2">
        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2">
            <Card.Body className="text-danger fs-4 fs-4">
              Esplora per genere
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Decenni</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">
              Attività e stati d'animo
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Worldwide</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Classifiche</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Audio Spaziale</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Video Musicali</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Nuovi Artisti</Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="bg-dark p-2 fs-4">
            <Card.Body className="text-danger">Hit del passato</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeLink
