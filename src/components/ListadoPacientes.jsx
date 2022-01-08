import Paciente from "./Paciente"

export const ListadoPacientes = ({pacientes, setPaciente, eliminarPacientes}) => {
    return (

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {/* texto condicional si hay o no pacientes */}
            {pacientes && pacientes.length ? (
            <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-center text-xl mt-5 mb-10">Administra tus {''}
            <span className="text-indigo-400 font-bold">Pacientes y Citas</span>
            </p>
            {pacientes.map(paciente => (
                <Paciente 
                key={paciente.uid}
                paciente={paciente}
                setPaciente={setPaciente}   
                eliminarPacientes={eliminarPacientes}
                />

            ))}
            
            </>
        
                    
            ) : (
                <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-center text-xl mt-5 mb-10">Comienza agregando pacientes {''}
                <span className="text-indigo-400 font-bold">y apareceran en este lugar</span>
                </p>    
                </>
            )}
        </div>
    )
}
