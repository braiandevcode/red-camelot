import React from 'react'
import { Link } from 'react-router-dom'

const Acerca = () => {
  return (
    <>
      <div className="p-0">
        <h2 className='font-extrabold text-2xl bg-gradient-to-r text-transparent from-red-900 to-yellow-500 bg-clip-text md:text-3xl text-center'>Acerca de esta página</h2>
        <section className="py-8 md:py-4 bg-coolGray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mb-20 mx-auto divide-y-2 divide-white">
              <p className="sm:text-sm md:text-md lg:text-lg tracking-tight mb-10 text-white">
                <span>Hola!!🤗 si estas aquí es porque te ha interezado saber de quién soy  y que te ofrezco.</span>
                <span className="italic text-coolGray-600">Bien, para empezar mi nombre es <strong>Braian Palacios</strong> y soy cajero de la plataforma <strong>Pink Game</strong> que pertenece a la Red <strong>Camelot</strong>.</span>
                <span>Esta página fue creada solo con el fin de guiar a mis clientes y que conozcan el proceso de como funciona mi red y que es lo más común que encontrarás en el mundo de los casinos virtuales.</span>
                <span>Esta pensado para las personas que aún no conocen todo este mundo de la virtualidad y espero que pueda orientarlos y a que se animen a probar suerte.</span>
                <span>Cabe recalcár, que el fin de esta página, también darme la oportunidad de hacerme conocer y transmitirle confianza, soy una persona responsable y activa.</span>
              </p>
              <div className='text-white text-sm md:text-md lg:text-lg'>
                <h2 className='text-xl md:text-1xl p-2 text-center'>¿Por que eleguirme como tu cajero?</h2>
                <p className='text-sm md:text-md lg:text-lg tracking-tight mb-10'>
                  <span>Debes eleguirme, porque en mi plataforma  <strong>Pink Game</strong> te ofrece una gran variedad de juegos en linea, muy intuitivas, y lo mas importante <strong><i>siempre da premios</i> </strong></span>
                  <span>Otro motivo por el cuál deberias eleguirme es porque trabajamos con gran seriedad y responsabilidad.</span>
                  <span>Soy un cajero de confianza e intentaré transmitirle todas las mejores vibras para que al momento de tomarse un relax y probar suerte comienze con el pie derecho.</span>
                </p>
              </div>
              <Link className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-white" to={"/"}>
                <span className="mr-4 text-white">Volver</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default Acerca