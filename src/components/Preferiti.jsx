import React from "react"
import { useSelector } from "react-redux"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Preferiti = () => {
  const preferiti = useSelector((state) => state.preferiti)

  return (
    <Container fluid className="ms-1">
      <h2 className="my-4 text-light">Brani Preferiti</h2>
      <Row>
        {preferiti.length === 0 ? (
          <p className="text-light">Nessun brano nei preferiti.</p>
        ) : (
          preferiti.map((item) => (
            <Col key={item.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
              <Card>
                <Card.Img variant="top" src={item.album.cover_medium} />
                <Card.Body>
                  <p className="text-dark m-0">{item.title}</p>
                  <p className="text-muted m-0">{item.artist.name}</p>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Link to="/">
        <Button variant="secondary">Torna alla home</Button>
      </Link>
    </Container>
  )
}

export default Preferiti
