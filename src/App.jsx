import {useEffect, useState} from 'react';
import Formulario from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  // retornar en un arreglo vacio los datos del form
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})
  // los props permiten pasar datos dl padre a hijo

  useEffect(() =>{
    // **detecta si hay algo en storage y lo coloca en el state
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(() =>{
    // ** la 2da vez que se eject el effect, la func detecta que hay algo
    // **en el state y lo mantiene en el local
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPacientes = uid =>{
    const pacienteActualizado = pacientes.filter( patient => 
      // nos permite sacar un elemnto del arreglo
      patient.uid !== uid);
    setPacientes(pacienteActualizado);  
  }
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex justify-evenly">
        <Formulario
        pacientes={pacientes} 
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente= {setPaciente}
        eliminarPacientes={eliminarPacientes}
        />
      </div>
    </div>
  )
  
}

export default App;
