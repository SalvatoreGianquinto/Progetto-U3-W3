import "bootstrap/dist/css/bootstrap.min.css"
const MyFooter = function () {
  return (
    <footer className="bg-dark text-secondary py-4 px-3">
      <div className="d-flex flex-wrap gap-2 mb-2">
        <span className="text-light">Italia</span>
        <span className="mx-1">|</span>
        <span>English (UK)</span>
      </div>

      <div className="mb-2">
        <small>
          Copyright © 2024 <span className="text-light">Apple Inc.</span> Tutti
          i diritti riservati.
        </small>
      </div>

      <div className="d-flex flex-wrap gap-2">
        <small>Condizioni dei servizi internet</small>
        <span className="mx-1">|</span>
        <small>Apple Music e privacy</small>
        <span className="mx-1">|</span>
        <small>Avviso sui cookie</small>
        <span className="mx-1">|</span>
        <small>Supporto</small>
        <span className="mx-1">|</span>
        <small>Feedback</small>
      </div>
    </footer>
  )
}

export default MyFooter
