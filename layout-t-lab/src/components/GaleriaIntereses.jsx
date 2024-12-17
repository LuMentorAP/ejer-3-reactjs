/* eslint-disable react/prop-types */
import "./../styles/GaleriaIntereses.css";

export default function GaleriaIntereses({ intereses }) {
    const cambiarColor = (e) => {
        e.target.style.backgroundColor =
          e.target.style.backgroundColor === "lightgreen" ? "#6c757d" : "lightgreen";
      };
  return (
    <div className="galeria-container">
      <ul>
        {intereses.map((interes) => (
          <li key={interes}>
            <button onClick={cambiarColor}>{interes}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
