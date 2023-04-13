//Primer state o hooks
import {useState,useEffect} from 'react'
import Header from "./components/Header"
import Button from './components/Button';
import { formatearDinero,calcularTotalPagar } from './helpers';

//Esto ya es un componente
function App() {
  //Puedes escribir codigo de JS

  //El state se usa para variables que en algun momento quieras modificar
  const [cantidad,setCantidad] = useState(10000); //Es como un destructuring de arreglo. Nunca se modifica el state, unicamente por sus set
  //Segundo state
  const [meses,setMeses] = useState(6) //El 6 es el valor inicial
  //Tercer state
  const[total,setTotal] = useState(0)
  const[pago,setPago] = useState(0)

  useEffect(()=>{ //Los useEffects siempre toman callbacks
    const resultadoTotalPagar = calcularTotalPagar(cantidad,meses)
    setTotal(resultadoTotalPagar);
  }, [cantidad,meses,total]); //Cada que la cantidad y los meses cambien, el useEffect se ejecutara

  useEffect(()=>{
    //Calcular el pago mensual
    setPago(total/meses)
  },[total])
 
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e){ //Recomendacion: Handle: change,submit,input etc.
    setCantidad(+e.target.value) //El signo de mas lo convierte a un numero
  }
  
  function handelClickDecrement(){
    const valor = cantidad-STEP;

    if(valor<MIN){
      alert('Cantidad no valida');
      return;
    }
      
    setCantidad(valor)
  }
  function handelClickIncrement(){
    const valor = cantidad+STEP;
    if(valor>MAX){
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor)
  }

  return (
    //Unicamente la parte visual (el HTML)
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      
      {/* Renderizar componentes */}
      <Header/>
      <div className='flex justify-between my-6'>

        <Button
          operador = '-' //Estos son los props
          fn={handelClickDecrement}
        /> 
        <Button
          operador = '+'
          fn={handelClickIncrement}
        />

      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        //Los eventos se registran en el elemente via atributo en el HTML
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP} //Saltos de 100 en 100
        value = {cantidad} //La barra inicia en la cantidad de 10000
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Eligen un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      {/* Seleccion de meses  */}
      <select 
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value = {meses}
        onChange = {e =>setMeses(+e.target.value)}
      >
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
      </select>

      {/* Resumen a presentar al usuario */}
      <div className='my-5 space=y=4 bg-gray-50 p-5'>
          <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
              Resumen <span className='text-indigo-600'>de pagos</span>
          </h2>
          <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
          <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
          <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
        
      </div>
    </div>
  )
}

export default App;
