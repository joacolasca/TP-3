import './Boton.css';
const Boton = ({titulo, tipo = '', className = ""})=>{
    
   if(tipo === "submit")
   {
        return <button className = {className} type={tipo}>{titulo}</button>;
   }
   else {
        return <button className = {className}>{titulo}</button>
   }
}
export default Boton;