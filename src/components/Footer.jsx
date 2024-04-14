import React from 'react';
import { Link } from 'react-router-dom';
import { routes, icons, content, iconsSocial, routesSocial, nameSocials } from '../scripts/config.js';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 h-auto w-full py-3">
        <div className="flex flex-row items-center justify-evenly md:justify-evenly container px-2 md:px-4 mx-auto mb-4">
          <div className="hidden md:grid w-1/2 p-8 shadow-x mb-6 grid-cols-1 gap-3">
            <h3 className="text-center font-extrabold mb-5 text-3xl md:text-5xl text-transparent bg-gradient-to-r from-red-900 to-yellow-500 bg-clip-text tracking-tighter p-2">Red Camelot</h3>
            <div className="hidden md:flex flex-wrap md:justify-end mb-4">
              <div className="auto w-full flex justify-center"> <Link className="inline-block px-5 py-3 text-white font-semibold tracking-tight bg-green-500 hover:bg-green-600 rounded-lg" to={import.meta.env.VITE_WSP} target="_blank" rel='noopener noreferrer'><i className="bi bi-whatsapp me-2"></i>Contacto</Link></div>
            </div>
          </div>
          <div className=" w-full flex flex-wrap justify-evenly">
            <div className="w-auto">
              <h3 className="mb-6  text-transparent bg-gradient-to-r from-red-900 to-yellow-500 bg-clip-text tracking-tight font-extrabold text-1xl md:text-2xl underline">Menu</h3>
              <ul>
                {
                  routes.map((l, i) => {
                    return (
                      <li className="font-bold  text-transparent bg-gradient-to-r from-white to-red-800 bg-clip-text lg:hover:text-gray-200 tracking-tight" key={i}>
                        {
                          i === routes.length - 1 ?
                            <Link target="_blank" rel="noopener noreferrer" key={i} to={l}><i className={`${icons[i]} me-2`}></i>{content[i]}</Link> :
                            <Link key={i} to={l}><i className={`${icons[i]} me-2`}></i>{content[i]}</Link>
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="w-auto">
              <h3 className="mb-6  text-transparent bg-gradient-to-r from-red-900 to-yellow-500 bg-clip-text tracking-tight font-extrabold text-1xl md:text-2xl underline">Social</h3>
              <ul>
                {
                  routesSocial.map((s, i) => {
                    return (
                      <li className="font-bold  text-transparent bg-gradient-to-r from-white to-red-800 bg-clip-text  hover:text-gray-200 mb-3 tracking-tight" key={i}>
                        {
                          <Link target="_blank" rel="noopener noreferrer" key={i} to={s}>
                            <i className={`${iconsSocial[i]} me-2`}></i>
                            {nameSocials[i]}
                          </Link>
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='mx-auto font-medium p-2 w-full'>
          <p className='font-mediabold text-gray-400 text-center text-xs md:text-sm'>
            Todos los derechos reservados <span>copiright 2024 <i className="bi bi-c-circle"></i></span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer