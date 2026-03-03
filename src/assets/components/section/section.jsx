import "./section.css";
import { useState } from "react";
import { translations } from "../../../i88n/translate";

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
        <h1>Stacks</h1>
        <div className="Container-Stacks">
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
          <div className="card-stack"></div>
        </div>
      </div>
    </>
  );
}

export default Section;
