import "./main.css";

function Main() {
  return (
    <main>
      <div className="textContet">
        <h1 className="Name">Olá eu sou Davi Nunes</h1>

        <h2>Desenvolvedor full-stack em desenvolvimento</h2>

        <div className="typewriter">
          <h1>Focado em arquitetura e Performance</h1>
        </div>

        <div className="Bnts">
          <a className="Botao-proje" href="#projetos">Ver Projetos</a>
          <a className="Botao-cv" href="#projetos">Pdf Curriculo</a>
        </div>
      </div>

      <img className="MyFoto" src="/DaviNunesFoto.png" alt="Davi Nunes" />
    </main>
  );
}

export default Main;