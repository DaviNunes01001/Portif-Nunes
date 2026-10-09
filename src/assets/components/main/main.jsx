import styles from "./main.module.css";

function Main() {
  return (
    <main className={styles.hero}>
      <div className={styles.textContet}>
        <p className={styles.eyebrow}>Portfólio pessoal</p>
        <h1 className={styles.Name}>Olá, eu sou Davi Nunes</h1>
        <h2>Desenvolvedor full-stack em evolução constante.</h2>

        <div className={styles.typewriter}>
          <p>Foco em arquitetura, performance e código limpo.</p>
        </div>

        <div className={styles.Bnts}>
          <a className={styles["Botao-proje"]} href="#Projetos">
            Ver projetos
          </a>
          <a className={styles["Botao-cv"]} href="#Contato">
            Entrar em contato
          </a>
        </div>
      </div>

      <img className={styles.MyFoto} src="DaviNunesFoto.png" alt="Davi Nunes" />
    </main>
  );
}

export default Main;
