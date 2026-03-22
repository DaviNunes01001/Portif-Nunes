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
      </div>
    </>
  );
}

export default App;
