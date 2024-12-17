/* eslint-disable react/prop-types */
import "./../styles/TarjetaProyecto.css";

export default function TarjetaProyecto({ titulo, descripcion }) {
  const btnMensaje = (titulo) => {
    console.log(`Explorando: ${titulo}`);
  };

  return (
    <div className="proyecto-container">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <button onClick={() => btnMensaje(titulo)}>Explorar más</button>
    </div>
  );
}
