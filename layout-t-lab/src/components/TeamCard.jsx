/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import "../styles/TeamCard.css";

export default function TeamCard({ nombre, rol, img }) {
  return (
    <div className="team-card">
      <img src={img} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{rol}</p>
    </div>
  );
}
