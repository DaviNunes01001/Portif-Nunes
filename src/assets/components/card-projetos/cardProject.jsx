import styles from "./cardProject.module.css";

function CardProject({
  title,
  description,
  icon,
  github,
  stacks,
  link,
  status,
}) {
  const corMapFundo = {
    CONCLUIDO: "#1f2a38",
    ANDAMENTO: "#2d2a1a",
    ONLINE: "#1a3025",
  };

  const CorLetra = {
    CONCLUIDO: "#9cd8ff",
    ANDAMENTO: "#f0d57d",
    ONLINE: "#97e4b0",
  };

  const CorStatus = corMapFundo[status] || "#232a33";
  const CorLetraStatus = CorLetra[status] || "#d0d7e0";

  const stackList = Array.isArray(stacks)
    ? stacks
    : stacks && typeof stacks === "object"
      ? Object.values(stacks)
      : [];

  return (
    <article className={styles.Cards}>
      <div className={styles["icon-And-status"]}>
        <p className={styles.icon}>{icon}</p>
        <div className={styles.status} style={{ backgroundColor: CorStatus }}>
          <p style={{ color: CorLetraStatus }}>{status}</p>
        </div>
      </div>

      <div className={styles["aling-text-stacks"]}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.stacks}>
          {stackList.map((item, index) => (
            <span key={index} className={styles["stack-item"]}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.br}></div>
      <div className={styles.Links}>
        <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={link} target="_blank" rel="noreferrer">Acessar ↗</a>
      </div>
    </article>
  );
}

export default CardProject;
