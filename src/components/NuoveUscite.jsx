import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import {
  aggiungiAiPreferiti,
  rimuoviDaiPreferiti,
  setNuoveUscite,
  setCanzoneCorrente,
} from "../redux/action"
import "bootstrap-icons/font/bootstrap-icons.css"
import { Link } from "react-router-dom"

const NuoveUscite = () => {
  const dispatch = useDispatch()
  const nuoveUscite = useSelector((state) => state.nuoveUscite)
  const preferiti = useSelector((state) => state.preferiti)

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=ultimo")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nella richiesta API")
        }
      })
      .then((data) => {
        const primiDieci = data.data.slice(0, 10)
        dispatch(setNuoveUscite(primiDieci))
      })
      .catch((error) => console.log(error))
  }, [dispatch])

  const handleAggiungiAiPreferiti = (brano) => {
    const isFavorite = preferiti.some((item) => item.id === brano.id)

    if (isFavorite) {
      dispatch(rimuoviDaiPreferiti(brano))
    } else {
      dispatch(aggiungiAiPreferiti(brano))
    }
  }

  const handleCanzoneSelezionata = (brano) => {
    dispatch(setCanzoneCorrente(brano)) // Aggiungi la canzone selezionata allo store
  }

  return (
    <Container fluid className="ms-1">
      <h2 className="my-4 text-light">Nuove Uscite</h2>
      <Row>
        {nuoveUscite.slice(0, 6).map((item) => {
          const isFavorite = preferiti.some((brano) => brano.id === item.id)
          return (
            <Col
              key={item.id}
              xs={4}
              sm={4}
              md={2}
              lg={2}
              className="me-lg-3 mb-3 d-block d-sm-none"
            >
              <Card
                className="h-100"
                onClick={() => handleCanzoneSelezionata(item)}
              >
                <Card.Img variant="top" src={item.album.cover_medium} />
                <Card.Body className="bg-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-light m-0">{item.title}</p>
                      <p className="text-light m-0">{item.artist.name}</p>
                    </div>
                    <Button
                      variant="link"
                      onClick={() => handleAggiungiAiPreferiti(item)}
                      className="text-danger p-0"
                    >
                      <i
                        className={`bi ${
                          isFavorite ? "bi-heart-fill" : "bi-heart"
                        }`}
                      ></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      {/* Seconda Row con immagini più grandi */}
      <Row className="justify-content-between">
        {nuoveUscite.slice(0, 10).map((item) => {
          const isFavorite = preferiti.some((brano) => brano.id === item.id)
          return (
            <Col
              key={item.id}
              xs={4}
              sm={4}
              md={3}
              lg={2}
              className="me-lg-3 mb-3 d-none d-sm-block"
            >
              <Card
                className="h-100"
                onClick={() => handleCanzoneSelezionata(item)}
              >
                <Card.Img variant="top" src={item.album.cover_medium} />
                <Card.Body className="bg-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="text-light m-0">{item.title}</p>
                      <p className="text-light m-0">{item.artist.name}</p>
                    </div>
                    <Button
                      variant="link"
                      onClick={() => handleAggiungiAiPreferiti(item)}
                      className="text-danger p-0"
                    >
                      <i
                        className={`bi ${
                          isFavorite ? "bi-heart-fill" : "bi-heart"
                        }`}
                      ></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      {/* Bottoni per navigazione */}
      <div className="d-flex justify-content-between mt-4">
        <Link to="/preferiti">
          <Button variant="primary">Vai alla lista preferiti</Button>
        </Link>
      </div>
    </Container>
  )
}

export default NuoveUscite
