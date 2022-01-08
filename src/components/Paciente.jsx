
const Paciente = ({paciente, setPaciente, eliminarPacientes}) => {
    const {nombre, propietario, email, fecha, sintomas, uid} = paciente;

    const handleEliminar = () => {
       const respuesta = confirm('Deseas Eliminar este paciente?');

       if(respuesta){
            eliminarPacientes(uid);
       }
    }

    return (
        <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>    
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>    
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>    
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>    
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>    
                </p>
                <div className="flex justify-around mt-6">
                    <button
                    type="button"
                    className="cursor-pointer py-2 px-10 bg-indigo-500 hover:bg-indigo-700 
                    text-white font-bold uppercase rounded-lg transition ease-in-out 
                    shadow-lg shadow-indigo-500"
                    onClick={() => setPaciente(paciente)}
                    >Editar</button>
                    <button
                    className="cursor-pointer py-2 px-10 bg-red-500 hover:bg-red-700 
                    text-white font-bold uppercase rounded-lg transition ease-in-out 
                    shadow-lg shadow-red-500"
                    type="button"
                    onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
    )
}

export default Paciente
