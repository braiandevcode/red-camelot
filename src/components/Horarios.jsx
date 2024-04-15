const Horarios = () => {
    return (
      <>
        <div className="p-6 mb-8 lg:mb-3">
          <h4 className='font-heading text-2xl sm:text-2xl lg:text-4xl text-center text-transparent bg-gradient-to-r from-blue-900  to-white bg-clip-text font-bold mb-2 ps-2 uppercase'><i className='bi-clock-fill me-2'></i>Horarios de pagos</h4>
          <div className="mb-3 p-3 md-p-4">
            <p className="text-xl text-gray-300 text-center font-semibold tracking-tight">
              Lunes a Viernes
            </p>
            <h3 className="font-semibold w-full text-center mb-3 inline-block text-3xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-red-900 to-gray-100 bg-clip-text">
              14a 20hs
            </h3>
          </div>
          <div className="mb-3 p-3 md-p-4">
            <p className="text-xl text-gray-300 text-center font-semibold tracking-tight">
              Sábados, Domingos y Feriados
            </p>
            <h3 className="font-semibold w-full text-center mb-3 inline-block text-3xl md:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-red-900 to-gray-100 bg-clip-text">
              16 a 19hs
            </h3>
          </div>
        </div>
      </>
    );
  };
  
  export default Horarios;