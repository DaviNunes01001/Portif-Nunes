import "./header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <h1>Davi Nunes</h1>
          <p>Full Stack Developer</p>
        </div>

        <nav aria-label="Navegação principal">
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#stacks">Stacks</a></li>
            <li><a href="#Projetos">Projetos</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
