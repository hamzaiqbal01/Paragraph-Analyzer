import "./helloWorld.css";

//Babel compiles JSX down to React.createElement() calls.

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid navContainer">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Newslater
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 rounded-5"
                type="search"
                placeholder="Search"
                aria-label="Search "
              />
            </form>
          </div>
        </div>
      </nav>
      <div className="cotainer-fluid border imgContainer"></div>
    </>
  );
}

export default App;
