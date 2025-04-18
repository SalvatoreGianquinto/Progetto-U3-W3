import React from "react"
import { Container, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux"

const Player = () => {
  const canzoneCorrente = useSelector((state) => state.canzoneCorrente)

  return (
    <Container
      fluid
      className="p-0 position-fixed bottom-0 start-0 w-100 d-block d-sm-none"
    >
      <Card
        className="d-flex flex-row justify-content-between p-3 text-white rounded-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="d-flex align-items-center">
          <img
            src={
              canzoneCorrente
                ? canzoneCorrente.album.cover_medium
                : "https://placedog.net/100/100"
            }
            alt="Album"
            className="rounded-3 me-3"
            style={{ width: "60px", height: "60px" }}
          />
          <div className="d-flex flex-column">
            <p className="m-0">
              {canzoneCorrente ? canzoneCorrente.title : "Nessuna canzone"}
            </p>
            <p>
              {canzoneCorrente
                ? canzoneCorrente.artist.name
                : "Artista sconosciuto"}
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <Button
            variant="link"
            className="text-white p-2"
            style={{ fontSize: "30px" }}
          >
            <i className="bi bi-play-circle"></i>
          </Button>
          <Button
            variant="link"
            className="text-white p-2"
            style={{ fontSize: "30px" }}
          >
            <i className="bi bi-skip-forward"></i>
          </Button>
        </div>
      </Card>
    </Container>
  )
}

export default Player
