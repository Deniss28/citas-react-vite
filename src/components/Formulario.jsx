import {useState, useEffect} from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    const [error, setError] = useState(false);

    // ! useEffect escucha por los cambios que sucede en los comp
    useEffect(() => {
        if(Object.keys(paciente).length > 0){
          setNombre(paciente.nombre);
          setPropietario(paciente.propietario);
          setEmail(paciente.email);
          setFecha(paciente.fecha);
          setSintomas(paciente.sintomas);
        }
    }, [paciente])
    // cuando un comp esta listo
   
    // cuando se pasa pasa los parametros vacios solo se ejecuta una vez


    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // ** validacion de form
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);
        // Objeto de Pacientes
        const objetoPaciente = {
            nombre, 
            propietario,
            email,
            fecha, 
            sintomas,
        }

        if(paciente.uid){
            // eitando registro
            objetoPaciente.uid = paciente.uid;
            console.log(objetoPaciente);
            console.log(paciente);

            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.uid === paciente.uid ? objetoPaciente : pacienteState)
            
            setPacientes(pacientesActualizados);
            setPaciente({});

        }else{
            // nuevo registro
            objetoPaciente.uid = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }
        // console.log(objetoPaciente);

        // ** Reiniciar Form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    };
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>  
            <p className="text-xl mt-5 text-center mb-10">Añade Pacientes y {""}
                <span className="text-indigo-500 font-bold">Administalos</span>
            </p>   

            <form onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10">
                {error &&  <Error>Todos los campos son Obligatorios</Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" 
                    className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input type="text" 
                    id="mascota"
                    placeholder="Nombre de la Mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rouded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" 
                    className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input type="text" 
                    id="propietario"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rouded-md"
                    value={propietario}
                    onChange = {(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" 
                    className="block text-gray-700 uppercase font-bold">Email</label>
                    <input type="email" 
                    id="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rouded-md"
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" 
                    className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input type="date" 
                    id="alta"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rouded-md"
                    value={fecha}
                    onChange = {(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" 
                    className="block text-gray-700 uppercase font-bold">Sintomas</label>
                    <textarea
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rouded-md"
                    placeholder="Describa los Sintomas"
                    value={sintomas}
                    onChange = {(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input type="submit" 
                className="transition ease-in-out bg-indigo-500 hover:bg-indigo-700 w-full p-3 text-white 
                uppercase cursor-pointer font-bold "
                value={paciente.uid ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>       
        </div>
    )
}

export default Formulario

