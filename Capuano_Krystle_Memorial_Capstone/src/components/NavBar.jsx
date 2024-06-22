

const NavBar = () => {
  return (

<nav className="navbar bg-body-tertiary fixed-top" id="navbar" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> Memories Of Mima </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"> Prettier Than Yesterday </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/timeline"> Timeline </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/memories"> Share A Memory </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Photo Albums
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/Mima&HoneyAlbum"> Mima & Honey </a></li>
              <li><a className="dropdown-item" href="/album"> Family </a></li>
              <li><a className="dropdown-item" href="/album"> Year </a></li>
              <li><a className="dropdown-item" href="/album"> Events </a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Family Gatherings </a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search Family Member" aria-label="Search"/>
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  )}

export default NavBar

