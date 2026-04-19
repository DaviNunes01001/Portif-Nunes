import "./App.css";
import Header from "./assets/components/header/header.jsx";
import Main from "./assets/components/main/main.jsx";
import Section from "./assets/components/section/section.jsx";
import CardProject from "./assets/components/card-projetos/cardProject.jsx";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Section />
      <section className="projetos-section" id="Projetos">
        <div className="section-inner">
          <header className="section-heading">
            <h2 className="section-title">Projetos</h2>
            <p className="section-sub">
              Alguns trabalhos e experimentos — o primeiro é real; os outros são
              preenchimento (lorem) só para visualizar o layout.
            </p>
          </header>
          <div className="Container-Card_projetos">
            <CardProject
              title="Portifolio —— Davi Nunes"
              description="Portifolio pessoal v2.0, construido com react + Vite, com foco em componetização real e deploy continuo via Github Pages."
              icon="🌏"
              github="https://github.com/DaviNunes01001/Portif-Nunes"
              stacks={["React", "Vite", "CSS Modules", "GitHub Pages"]}
              link="https://davinunes01001.github.io/Portif-Nunes/"
              status="ONLINE"
            />
            <CardProject
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              icon="📦"
              github="#"
              stacks={["Node", "API", "MongoDB"]}
              link="#"
              status="ANDAMENTO"
            />
            <CardProject
              title="Consectetur adipiscing elit"
              description="Dui aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
              icon="⚙️"
              github="#"
              stacks={["JavaScript", "PostegreSQL"]}
              link="#"
              status="CONCLUIDO"
            />
          </div>
        </div>
      </section>

      <section className="contato-section" id="Contato">
        <div className="section-inner">
          <header className="section-heading">
            <h2 className="section-title">Contato</h2>
          </header>
          <div className="contato-slot" aria-label="Área de contato (vazia)" />
        </div>
      </section>

      <footer className="footer-site">
        <div className="section-inner footer-inner" />
      </footer>
    </>
  );
}

export default App;
