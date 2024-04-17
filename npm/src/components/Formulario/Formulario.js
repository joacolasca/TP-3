import './Formulario.css';

const Formulario = ({ nombre, tipo }) => {
 if({tipo}!="textarea")
    {
        return (
            <>
                <label>{nombre}</label>
                <input type = {tipo} name = {nombre} placeholder={nombre}></input>
            </>
        );
    }
    else{
        return(
            <>
                <label>{nombre}</label>
                <textarea name= {nombre}></textarea>
            </> 
        );
    }
}
export default Formulario;