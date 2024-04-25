import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';
import Boton from './components/Boton/Boton';
function App() {
    return(
        <>
          <Titulo texto="ADMINISTRADOR DE PACIENTES" />
          <div class="container">
         <div class="row">
                <div className="one-half column">
                    <Subtitulo texto = "CREAR MI CITA"/>
                    <form>
                        <Formulario nombre = "Nombre Mascota"  tipo="text"/>
                        <Formulario nombre = "Nombre Dueño" tipo="text"/>
                        <Formulario nombre = "Fecha" tipo="date"/>
                        <Formulario nombre = "hora" tipo="time"/>
                        <Formulario nombre = "Sintomas" tipo="textarea" placeholder= "" />
                        <Boton className="u-full-width button-primary" titulo="AGREGAR CITA" tipo = "submit"/>
                    </form>
                </div>
                <div className = "one-half column">
                    <Subtitulo texto = "ADMINISTRA TUS CITAS"/>
                    <div><Cita mascota= "Nina" dueño="Martin" fecha='2021-08-05' hora='08:20' sintomas= "Le duele la pierna"/></div>
                    <div><Cita mascota= "Sifon" dueño="Flecha" fecha='2023-08-05' hora='09:24' sintomas= "Duerme mucho"/></div>
                    <div><Cita mascota= "Floki" dueño="Ari" fecha='2023-08-05' hora='16:15' sintomas= "No está comiendo"/></div>
                </div>
                </div>
                </div>
        </>
    );
}

export default App;
