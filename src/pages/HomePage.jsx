import { useEffect, useState } from 'react';
import Cronograma from '../components/Cronograma';
import FaqSection from '../components/PreguntasFrecuentes';
import { Link } from 'react-router-dom';
import { getImages } from '../scripts/ajax';
import TextAnimation from '../helpers/TextAnimation';
import Loading from '../components/Loading';

const HomePage = () => {
  const [isConfirm, setIsconfirm] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [imagesData, setImagesData] = useState([]);

  const isOn = () => {
    setIsClick(true);
    setIsconfirm(false);
    setIsCopy(false);
  }
  const isOnConfirm = () => {
    setIsconfirm(true)
    setIsClick(false)
    setIsCopy(false)
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(import.meta.env.VITE_CODE);
    setIsCopy(true);
    setIsconfirm(false)
    setIsClick(false)
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getImages(imagesData);
      setImagesData(data);
    }
    fetchData()

  }, []);

  const handleFinish = (e) => {
    e.preventDefault();
    return window.location.reload();
  }
  if (isClick) return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
      <div className="max-w-xl w-full mx-auto bg-gray-500 rounded-xl overflow-hidden">
        <div className="max-w-sm mx-auto pt-12 pb-8 px-5 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 mb-5 bg-gray-600 rounded-full">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0005 15C11.8027 15 11.6093 15.0587 11.4449 15.1686C11.2804 15.2784 11.1523 15.4346 11.0766 15.6173C11.0009 15.8001 10.9811 16.0011 11.0197 16.1951C11.0583 16.3891 11.1535 16.5673 11.2933 16.7071C11.4332 16.847 11.6114 16.9422 11.8054 16.9808C11.9993 17.0194 12.2004 16.9996 12.3831 16.9239C12.5659 16.8482 12.722 16.72 12.8319 16.5556C12.9418 16.3911 13.0005 16.1978 13.0005 16C13.0005 15.7348 12.8951 15.4805 12.7076 15.2929C12.52 15.1054 12.2657 15 12.0005 15ZM22.6705 16.47L14.6205 2.47003C14.3603 2.00354 13.9802 1.61498 13.5196 1.3445C13.0591 1.07401 12.5346 0.931396 12.0005 0.931396C11.4663 0.931396 10.9419 1.07401 10.4813 1.3445C10.0207 1.61498 9.64065 2.00354 9.38046 2.47003L1.38046 16.47C1.11125 16.924 0.966598 17.441 0.9611 17.9688C0.955602 18.4966 1.08945 19.0166 1.34914 19.4761C1.60883 19.9356 1.98516 20.3185 2.44014 20.5861C2.89512 20.8536 3.41264 20.9964 3.94046 21H20.0605C20.5925 21.0053 21.1164 20.8689 21.5784 20.6049C22.0403 20.341 22.4238 19.9589 22.6894 19.4978C22.9551 19.0368 23.0933 18.5134 23.09 17.9814C23.0866 17.4493 22.9418 16.9277 22.6705 16.47ZM20.9405 18.47C20.8528 18.626 20.7249 18.7556 20.5701 18.8453C20.4154 18.935 20.2393 18.9815 20.0605 18.98H3.94046C3.76157 18.9815 3.58556 18.935 3.43077 18.8453C3.27599 18.7556 3.14811 18.626 3.06046 18.47C2.97269 18.318 2.92648 18.1456 2.92648 17.97C2.92648 17.7945 2.97269 17.622 3.06046 17.47L11.0605 3.47003C11.1444 3.30623 11.2719 3.16876 11.4289 3.07277C11.5859 2.97678 11.7664 2.92599 11.9505 2.92599C12.1345 2.92599 12.315 2.97678 12.472 3.07277C12.629 3.16876 12.7565 3.30623 12.8405 3.47003L20.8905 17.47C20.9897 17.6199 21.0467 17.7937 21.0555 17.9732C21.0643 18.1527 21.0245 18.3312 20.9405 18.49V18.47ZM12.0005 7.00003C11.7352 7.00003 11.4809 7.10538 11.2933 7.29292C11.1058 7.48046 11.0005 7.73481 11.0005 8.00003V12C11.0005 12.2652 11.1058 12.5196 11.2933 12.7071C11.4809 12.8947 11.7352 13 12.0005 13C12.2657 13 12.52 12.8947 12.7076 12.7071C12.8951 12.5196 13.0005 12.2652 13.0005 12V8.00003C13.0005 7.73481 12.8951 7.48046 12.7076 7.29292C12.52 7.10538 12.2657 7.00003 12.0005 7.00003Z" fill="#f8f815"></path>
            </svg>
          </div>
          <h4 className="text-xl text-gray-100 font-semibold mb-5">Advertencia:</h4>
          <p className="text-gray-200 font-medium">Estimado cliente. si usted  copia el CBU/CVU le sugerimos que se contacte y de aviso al cajero antes de su deposito, de lo contrario <strong className='text-yellow-500'>NO</strong> nos haremos cargo de lo que pueda suceder.</p>
          <p className='text-gray-200 font-medium'> <strong className='text-yellow-500 font-medium'>INSISTIMOS: </strong>Por favor antes de depositar contactese con el cajero para reconocer su pago. Gracias.</p>
        </div>
        <div className="pt-5 pb-6 px-6 text-right bg-gray-600 -mb-2"><button className="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center font-semibold leading-6 text-gray-200 bg-red-500 hover:bg-red-400 rounded-lg transition duration-200" onClick={(e) => handleFinish(e)}>Cancel</button><button className="inline-block w-full sm:w-auto py-3 px-5 mb-2 text-center font-semibold leading-6 text-blue-50 bg-green-500 hover:bg-green-600 rounded-lg transition duration-200" onClick={isOnConfirm}>De acuerdo</button></div>
      </div>
    </div>
  )

  if (isCopy) return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
      <div className="max-w-xl w-full mx-auto bg-white rounded-xl overflow-hidden">
        <div className="max-w-sm mx-auto pt-12 pb-8 px-5 text-center">
          <h4 className="text-xl text-teal-900 font-semibold mb-5">Copiado correctamente <i class="bi bi-check-circle-fill"></i></h4>
        </div>
        <div className="pt-5 pb-6 px-6 text-center bg-gray-600 -mb-2">
          <button className="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center font-semibold leading-6 text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition duration-200" onClick={(e) => handleFinish(e)}>Terminar</button>
        </div>
      </div>
    </div>
  )

  if (isConfirm) return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full p-4 bg-gray-800 bg-opacity-80 overflow-y-auto">
      <div className="max-w-xl w-full mx-auto bg-gray-500 rounded-xl overflow-hidden">
        <div className="max-w-sm mx-auto pt-12 pb-8 px-5 text-center">
          <h4 className="text-xl text-gray-100 font-semibold mb-5" >Haz clik sobre el icono para copiar el CBU/CVU</h4>
          <p className="text-gray-300 font-medium title_copy" title='Copiar'><i className="bi bi-clipboard-check-fill" onClick={handleCopy}></i></p>
        </div>
        <div className="pt-5 pb-6 px-6 text-right bg-gray-600 -mb-2"><button className="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center font-semibold leading-6 text-gray-200 bg-gray-500 hover:bg-gray-400 rounded-lg transition duration-200" onClick={(e) => handleFinish(e)}>Volver</button></div>
      </div>
    </div>
  )
  const img = `camelot.jpg`;
  const isMovil = window.matchMedia('(min-width:1024px)').matches;

  return (
    <>
      <section className="relative py-20 md:py-24 mb-8 overflow-hidden">
        <div className="relative container px-4 mx-auto mb-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap flex-col-reverse gap-y-16 lg:gap-0 lg:flex-row -mx-4 items-center divide-x-0 lg:divide-x-2 divide-gray-400">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="relative z-10 max-w-lg mx-auto">
                  <TextAnimation text={'Grandes premios te estan esperando en mi panel!!'} clase={'font-heading text-2xl sm:text-2xl lg:text-4xl  text-transparent bg-gradient-to-r from-blue-900  to-white bg-clip-text font-bold mb-6 ps-2 uppercase'} />
                  <div className="md:flex mb-16">
                    <div className="mb-6 md:mb-0 hidden md:block md:mr-8 pt-2 text-gray-600">
                      <svg width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z" fill="#1E2238"></path>
                      </svg>
                    </div>
                    <div className="max-w-xs">
                      <p className="lg:text-lg text-sm ps-3 font-semibold text-gray-400">Contactate a mi WhatsApp o tambien puedes solicitar CBU para agilizar tu compra de fichas.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:gap-2">
                    <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <Link className="inline-block px-5 py-3 text-white font-semibold tracking-tight bg-green-500 hover:bg-green-600 rounded-lg" to={import.meta.env.VITE_WSP} target="_blank" rel='noopener noreferrer'>
                        <i className="bi bi-whatsapp me-2 text-sm md:text-lg"></i>
                        <span className="mr-4">Contacto</span>
                      </Link>
                      <button className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" onClick={isOn}><i className="bi bi-link-45deg me-2"></i>CBU o CVU</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 hidden lg:block">
                <div className="relativelg:pl-16 xl:pl-0 max-w-lg mx-auto">
                  {
                    !img ? <Loading /> :  <img className="relative block w-full xl:max-w-sm lg:ml-auto shadow-md shadow-white rounded-xl" src={img} alt="imagen de lobo" />
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center md:text-start'>
          <h4 className="mb-3 text-1xl font-semibold text-yellow-500" style={{ letterSpacing: "-0.5px" }}><i className="bi bi-exclamation-circle-fill me-2"></i>ADVERTENCIA</h4>
          <small className="text-gray-400 tracking-tight">Jugar compulsivamente puede ser perjudicial para la salud</small>
        </div>
      </section>
      <Cronograma />
      {
        isMovil ? (
          <FaqSection />
        )
        :
        ''
      }

    </>
  )
}
export default HomePage