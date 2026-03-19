import styles from "./main.module.css";

function Main() {
  return (
    <main>
      <div className={styles.textContet}>
        <h1 className={styles.Name}>Olá eu sou Davi Nunes</h1>

        <h2>Desenvolvedor full-stack em desenvolvimento</h2>

        <div className={styles.typewriter}>
          <h1>Focado em arquitetura e Performance</h1>
        </div>

        <div className={styles.Bnts}>
          <a className={styles["Botao-proje"]} href="#projetos">
            Ver Projetos
          </a>
          <a className={styles["Botao-cv"]} href="#">
            Pdf Curriculo
          </a>
        </div>
      </div>

      <img className={styles.MyFoto} src="DaviNunesFoto.png" alt="Davi Nunes" />
    </main>
  );
}

export default Main;
