/* eslint-disable react/prop-types */
import "../styles/EquipoTalentoLab.css";
import TeamCard from "./TeamCard";

export default function EquipoTalentoLab({ team }) {
  return (
    <div className="equipo-container">
      <h1>Equipo Talento Lab</h1>
      <div className="team-list">
        {team.map((teamMember) => (
          <TeamCard
            key={teamMember.nombre}
            nombre={teamMember.nombre}
            rol={teamMember.rol}
            img={teamMember.img}
          />
        ))}
      </div>
    </div>
  );
}
