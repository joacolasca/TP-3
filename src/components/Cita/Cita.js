import Boton from '../Boton/Boton';
import './Cita.css';
const Cita=({mascota, dueño, fecha, hora, sintomas})=>{
    return(
        <>
            <div className='cita'>
                <p>Mascota: <span>{mascota}</span></p>
                <p>Dueño: <span>{dueño}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Sintomas: <span>{sintomas}</span></p>
                <Boton className="button elimnar u-full-width" titulo = "Eliminar ×"/>
            </div>
        </>
    )
}
export default Cita;