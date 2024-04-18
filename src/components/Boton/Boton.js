import './Boton.css';
const Boton = ({titulo, tipo = ''})=>{
    
   if(tipo === "submit")
   {
        return <button type={tipo}>{titulo}</button>;
   }
   else {
        return <button>{titulo}</button>
   }
}
export default Boton;