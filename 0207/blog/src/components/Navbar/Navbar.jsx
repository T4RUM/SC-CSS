import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <a href="#">
        <img
          className="logo"
          src="public\blogger.png"
          alt="Imagem da mensagem"
        />
      </a>
      <nav>
        <ul className="navbar-botttons">
          <li>
            <a href="./Navbar.jsx">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
