import './boton.css';
const Boton=({titulo,tipo = " "})=>{
    return <button type = {tipo}>{titulo}</button>;
}
export default Boton;