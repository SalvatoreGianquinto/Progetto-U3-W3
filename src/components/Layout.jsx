const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <div
        className="d-none d-md-block bg-dark text-white p-4"
        style={{
          width: "250px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Cerca..."
            className="form-control border-0 shadow-none"
            style={{ minWidth: "200px" }}
          />
        </div>
        <ul className="list-unstyled">
          <li className="d-flex align-items-center">
            <i className="bi bi-house-door me-2 text-danger fs-4"></i>
            Home
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-grid me-2 text-danger fs-4"></i>Novità
          </li>
          <li className="d-flex align-items-center">
            <i className="bi bi-broadcast me-2 text-danger fs-4"></i>Radio
          </li>
        </ul>
      </div>

      <div className="flex-grow-1 w-100" style={{ marginLeft: "0" }}>
        <div className="d-none d-md-block" style={{ marginLeft: "250px" }}>
          {children}
        </div>
        <div className="d-block d-md-none">{children}</div>
      </div>
    </div>
  )
}

export default Layout
