import "./cards.css";

function Cards({ icon, name, categoria, nivel, invert }) {
  const nivelMap = {
    basico: 30,
    intermediario: 70,
    avancado: 90,
  };

  const corMap = {
    basico: "yellow",
    intermediario: "orange",
    avancado: "green",
  };

  const corNivel = corMap[nivel] || "gray"
  const porcentagem = nivelMap[nivel] || 0;

  return (
    <div
     className="card-stack"
     style={{"--cor-nivel": corNivel}}>
      <img src={icon} alt={`Icone stack: ${name}`}
      style={{
          filter: invert ? "invert(1)" : "none"
        }}
       />

      <div className="text-container">
        <h1>Stack: {name}</h1>
        <h2>Categoria: {categoria}</h2>

        <div className="range-container">
          <div
            className="range-fill"
            style={{
              width: `${porcentagem}%`,
              backgroundColor: corMap[nivel] || "gray",
            }}
          ></div>
        </div>

        <p className="nivel-texto">Nível: {nivel}</p>
      </div>
    </div>
  );
}

export default Cards;
