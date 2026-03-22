import styles from "./cards.module.css";

const nivelLabel = {
  basico: "Básico",
  intermediario: "Intermediário",
  avancado: "Avançado",
};

function Cards({ icon, name, categoria, nivel, invert }) {
  const nivelMap = {
    basico: 50,
    intermediario: 75,
    avancado: 90,
  };

  const corMap = {
    basico: "#c8e632",
    intermediario: "#38bdf8",
    avancado: "#34d399",
  };

  const corNivel = corMap[nivel] || "gray";
  const porcentagem = nivelMap[nivel] || 0;
  const labelNivel = nivelLabel[nivel] || nivel;

  return (
    <article
      className={styles["card-stack"]}
      style={{ "--cor-nivel": corNivel }}
    >
      <div className={styles["card-icon-wrap"]}>
        <img
          src={icon}
          alt={`${name}`}
          className={styles["card-icon"]}
          style={{
            filter: invert ? "invert(1)" : "none",
          }}
        />
      </div>

      <div className={styles["text-container"]}>
        <div className={styles["card-head"]}>
          <h3 className={styles["card-name"]}>{name}</h3>
          <span className={styles["card-badge"]} data-nivel={nivel}>
            {labelNivel}
          </span>
        </div>
        <p className={styles["card-category"]}>{categoria}</p>

        <div className={styles["range-wrap"]}>
          <div className={styles["range-container"]}>
            <div
              className={styles["range-fill"]}
              style={{
                width: `${porcentagem}%`,
                backgroundColor: corMap[nivel] || "gray",
              }}
            />
          </div>
          <span className={styles["range-pct"]}>{porcentagem}%</span>
        </div>
      </div>
    </article>
  );
}

export default Cards;
