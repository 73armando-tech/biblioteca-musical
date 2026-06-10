import logo from "../assets/Logo_final.svg";

function Header() {
  return (
    <header>
      <div className="logoContainer">
        <img
          src={logo}
          alt="Biblioteca Musical"
          className="logo"
        />
      </div>

      <div className="headerContent">
        <h1>SoundFinder</h1>
        <p>
          Busca artistas, explora álbumes y guarda tus favoritos
        </p>
      </div>
    </header>
  );
}

export default Header;