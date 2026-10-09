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
          <div className="section-heading">
            <h2 className="section-title">Projetos</h2>
            <p className="section-sub">
              Alguns trabalhos e experimentos — o primeiro é real; os outros são
              preenchimento (lorem) só para visualizar o layout.
            </p>
          </div>
          <div className="Container-Card_projetos">
            <CardProject
              title="Portifolio —— Davi Nunes"
              description="Portifolio pessoal v2.0, construido com react + Vite, com foco em componetização real e deploy continuo via Github Pages."
              icon="🌏"
              github="https://github.com/DaviNunes01001/Portif-Nunes"
              stacks={["React", "Vite", "CSS Modules", "Deploy No Vercel"]}
              link="https://portifolio-nunes.vercel.app/"
              status="ONLINE"
            />
            <CardProject
              title="Busca CEP React"
              description="Aplicação React que busca informações de endereço através de CEP (código de endereçamento postal brasileiro) consumindo a ViaCEP API."
              icon="📦"
              github="#"
              stacks={["React", "API"]}
              link="https://github.com/DaviNunes01001/BuscaDeCep"
              status="CONCLUIDO"
            />
            <CardProject
              title="Integração de API propria e Front"
              description="Aplicação Full-Stack com node e HTML5 E CSS3, Crud simples - (Create, Read, Uptade, Delete)"
              icon="⚙️"
              github="#"
            stacks={["JavaScript", "PostegreSQL", "NODE", "API", "API-REST", "Crud"]}
              link="https://github.com/DaviNunes01001/Api-post_cliente"
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
          <div className="contato-slot">
            <p className="contato-intro">
             Aqui abaixo os meus canais de comunicação
            </p>
            <div className="contato-grid">
              <article className="contato-card">
                <span className="contato-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/davi-nunes-bulhoes-08399638b/"
                  target="_blank"
                  rel="noreferrer"
                  className="contato-link"
                >
                  Davi Nunes Bulhoes
                </a>
                <p className="contato-note">
                  Conecte-se para trocar ideias, ver o portfólio e iniciar uma conversa profissional.
                </p>
              </article>
              <article className="contato-card">
                <span className="contato-label">E-mail</span>
                <a href="mailto:davinuns20@gmail.com" className="contato-link">
                  davinuns20@gmail.com
                </a>
                <p className="contato-note">
                  Envie uma mensagem para obter respostas rápidas, feedbacks e propostas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-site">
        <div className="section-inner footer-inner">
          <p className="footer-text">© Davi Nunes Bulhoes - Full Stack Developer</p>
        </div>
      </footer>
    </>
  );
}

export default App;
