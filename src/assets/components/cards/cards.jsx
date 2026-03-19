import styles from "./cards.module.css";

function Cards({ icon, name, categoria, nivel, invert }) {
  const nivelMap = {
    basico: 50,
    intermediario: 75,
    avancado: 90,
  };

  const corMap = {
    basico: "#ddf030",
    intermediario: "#0c87da",
    avancado: "#09ce09",
  };

  const corNivel = corMap[nivel] || "gray"
  const porcentagem = nivelMap[nivel] || 0;

  return (
    <div
     className={styles["card-stack"]}
     style={{"--cor-nivel": corNivel}}>
      <img src={icon} alt={`Icone stack: ${name}`}
      style={{
          filter: invert ? "invert(1)" : "none"
        }}
       />

      <div className={styles["text-container"]}>
        <h1>Stack: {name}</h1>
        <h2>Categoria: {categoria}</h2>

        <div className={styles["range-container"]}>
          <div
            className={styles["range-fill"]}
            style={{
              width: `${porcentagem}%`,
              backgroundColor: corMap[nivel] || "gray",
            }}
          ></div>
        </div>

        <p className={styles["nivel-texto"]}>Nível: {nivel}</p>
      </div>
    </div>
  );
}

export default Cards;
