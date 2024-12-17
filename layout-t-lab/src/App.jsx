import EquipoTalentoLab from './components/EquipotalentoLab'
import GaleriaIntereses from './components/GaleriaIntereses';
import TarjetaProyecto from './components/TarjetaProyecto'

function App () {
  const team = [
    {
      nombre: 'Silvia',
      rol: 'Product Owner',
      img: './silvia.jpg'
    },
    {
      nombre: 'Luis',
      rol: 'Diseñador UX/UI',
      img: './luis.jpg'
    },
    {
      nombre: 'Matias',
      rol: 'Desarrollador',
      img: './matias.jpg'
    },
    {
      nombre: 'Sabrina',
      rol: 'Desarrolladora',
      img: './sabrina.jpg'
    }
  ]

  const proyecto = {
    titulo: 'Lab-Solution',
    descripcion: 'asdasdasdasdasdasdasdasdsadasdsadasasasdasassadasdasdasdsa'
  }

  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js'];

  return (
    <>
      <EquipoTalentoLab team={team} />
      <TarjetaProyecto titulo={proyecto.titulo} descripcion={proyecto.descripcion} />
      <GaleriaIntereses intereses={intereses} />
    </>
  )
}

export default App
