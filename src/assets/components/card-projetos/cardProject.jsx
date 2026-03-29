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
    CONCLUIDO: "#170080ab",
    ANDAMENTO: "#858300be",
    ONLINE: "#0d2818",
  };

  const CorLetra = {
    CONCLUIDO: "#00ffea",
    ANDAMENTO: "#fffb00",
    ONLINE: "#2dc257",
  };

  const CorStatus = corMapFundo[status] || "grey";
  const CorLetraStatus = CorLetra[status] || "grey";

  const stackList = Array.isArray(stacks)
    ? stacks
    : stacks && typeof stacks === "object"
      ? Object.values(stacks)
      : [];

  return (
    <>
      <div className={styles["Cards"]}>
        <div className={styles["icon-And-status"]}>
          <p className={styles["icon"]}>{icon}</p>
          <div
            className={styles["status"]}
            style={{ "--cor-status": CorStatus }}
          >
            <p style={{ "--cor-letra": CorLetraStatus }}>{status}</p>
          </div>
        </div>

        <div className={styles["aling-text-stacks"]}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles["stacks"]}>
            {stackList.map((item, index) => (
              <span key={index} className={styles["stack-item"]}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles["br"]}></div>
        <div className={styles["Links"]}>
          <a href={github}><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.svg" alt="icon-github"/>GitHub</a>
          <a href={link}><img src="https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/link.svg" alt="Link-site-emoji" />Link</a>
        </div>
      </div>
    </>
  );
}

export default CardProject;
