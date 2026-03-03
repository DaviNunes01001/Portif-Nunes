import "./section.css";
import { useState } from "react";
import { translations } from "../../../i88n/translate";
import Cards from "../cards/cards.jsx";

function Section() {
  const [lang, setLang] = useState("pt");

  return (
    <>
      <section>
        <div className="container">
          <h1>"Talk is cheap. Show me the code."</h1>
          <h2>Linus Torvalds</h2>
        </div>

        <div className="about-me">
          <h1>About me</h1>

          <div className="Container-about">
            <div className="bnts-apple">
              <div className="bnts-mac">
                <div className="apple-bnt"></div>
                <div className="apple-bnt"></div>
                <div className="apple-bnt"></div>
              </div>

              <div className="Translate">
                <button
                  id="Translate-button"
                  onClick={() => setLang(lang === "pt" ? "en" : "pt")}
                >
                  <img src="translate-icon.svg" alt="" />
                </button>
              </div>
            </div>

            <pre>
              <code>{`<p>${translations[lang].about}</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="Stacks">
        <h1 className="stacks-h1">Stacks</h1>
        <div className="container-stacks">
          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            name="HTML5"
            categoria="Markup"
            nivel="avancado"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            name="CSS3"
            categoria="Estilização"
            nivel="avancado"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            name="JavaScript"
            categoria="Linguagem"
            nivel="intermediario"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            name="React"
            categoria="Front-End"
            nivel="basico"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            name="Node.js"
            categoria="Back-End"
            nivel="intermediario"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            name="Git"
            categoria="Versionamento"
            nivel="intermediario"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            name="SQL"
            categoria="Banco de Dados"
            nivel="intermediario"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
            name="Express"
            categoria="Back-End Framework"
            nivel="basico"
            invert={true}
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            name="GitHub"
            categoria="Versionamento"
            nivel="intermediario"
            invert={true}
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            name="VS Code"
            categoria="Editor de Código"
            nivel="avancado"
          />

          <Cards
            icon="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
            name="Figma"
            categoria="UI/UX Design"
            nivel="basico"
          />
        </div>
      </div>
    </>
  );
}

export default Section;
