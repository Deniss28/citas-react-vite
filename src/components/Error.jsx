
const Error = ({children}) => {
    return (
        <div 
            className="bg-red-600 text-center text-white p-1 mb-3 rounded">
                    <p className="font-bold uppercase">{children}</p>
        </div>
    )
}

export default Error
