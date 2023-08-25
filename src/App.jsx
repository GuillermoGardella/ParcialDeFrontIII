import Form from './Components/Form'
import Card from './Components/Card'
import { useState } from 'react'
import './App.css'


function App() {

  const [validatedFields, setValidatedFields] = useState(false);
  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [data, setData] = useState({
    nombre: "",
    color: "",
  });
  const [isNombreOk, setIsNombreOk] = useState(true);
  const [isColorOk, setIsColorOk] = useState(true);

  const nombreOnChange = e => {
    setNombre(e.target.value)
    if(nombre.trim().length > 3)
      setIsNombreOk(true)
  }

  const colorOnChange = e => {
    setColor(e.target.value)
    if(color.length > 6)
    setIsColoryOk(true)
  }


  const validateNombre = () => {
    if(nombre.trim().length > 3)
      setIsNombreOk(true)
    else
      setIsNombreOk(false)
      setValidatedFields(false)
  }

  const validateColor = () => {
    if(color.length > 6)
      setIsColorOk(true)
    else
      setIsColorOk(false)
      setValidatedFields(false)
  }

  const validateForm = () => {
    if(nombre.trim().length > 3 && color.length > 6)
      setValidatedFields(true)
  }

  const cleanForm = () => {
    setNombre("");
    setColor("")
  }

  const submitHandler = e => {
    e.preventDefault();
    validateNombre();
    validateColor();
    validateForm();
    setData({
      nombre: nombre,
      color: color
    });
    if(nombre.trim().length >= 3 && color.length >= 6)
      cleanForm();
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Nombre:</label>
        <input type="text" value={nombre} onChange={nombreOnChange} className={!isNombreOk ? "error" : ""} />
        {!isNombreOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <label htmlFor="">Color:</label>
        <input type="text" value={color} onChange={colorOnChange} className={!isColorOk ? "error" : ""} />
        {!isColorOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <button type='submit'>Enviar</button>
      </form>
      {validatedFields && <Card data={data} />}
    </div>
  )
}

export default App