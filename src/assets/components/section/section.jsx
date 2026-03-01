import "./section.css";

function Section() {
  return (
    <section>
      <div className="container">
        <h1>"Talk is cheap. Show me the code."</h1>
        <h2>Linus Torvalds</h2>
      </div>
      <div className="about-me">
        <h1>About me</h1>
        <div className="Container-about">
          <div className="bnts-apple">
            <div className="apple-bnt"></div>
            <div className="apple-bnt"></div>
            <div className="apple-bnt"></div>
          </div>
          <p>
            <pre>
              <code>
                &lt;p&gt; Meu nome é Davi Nunes, tenho 18 anos, atualmente
                estudo no sesi no ensino medio tecnico orquestrado pelos
                professores do senai em parceria com o sesi, curso o tecnico de
                analise e desenvolvimento de sistemas (ADS), estou sempre em
                constante evolução, buscando me consolidar nas tecnologias
                conhecidas e me aprofundar cada vez mais nesse mundo incrivel da
                tecnologia, desejo fazer coisas grandes, funcionais,
                performaticas e inteligentes.&lt;/p&gt;
              </code>
            </pre>
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Section;
