import { useEffect, useRef, useState } from 'react';
import { getImages } from '../scripts/ajax';
import Horarios from './Horarios';
import SlideShow from './SlideShow';
const Cronograma = () => {
    const slideShow = useRef(null);
    const [imagesData, setImagesData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getImages(imagesData);
            setImagesData(data)
        }
        fetchData()
    }, []);

    const handleNext = () => {
        if (slideShow.current.children.length > 0) {
            const firstChild = slideShow.current.children[0];

            slideShow.current.style.transition = '300ms ease-out '

            const sizesSlide = slideShow.current.children[0].offsetWidth;


            slideShow.current.style.transform = `translateX(-${sizesSlide}px)`;

            const transition = () => {
                slideShow.current.style.transition = 'none';
                slideShow.current.style.transform = `translateX(0)`;

                slideShow.current.appendChild(firstChild);

                slideShow.current.removeEventListener('transitionend', transition);
            }

            slideShow.current.addEventListener('transitionend', transition);
        }
    };
    useEffect(() => {
        setInterval(() => {
            handleNext();
        }, 5000);
    }, [])
    return (
        <>
            <section className="w-full py-8 md:py-10 from-gray-700 to-yellow-500 overflow-hidden mb-3">
                <div className="w-full p-5 relative overflow-x-hidden">
                    <SlideShow r_ref={slideShow}>
                        <img className='w-full h-auto' src="/portada-1.jpg" alt="imagen de portada" />
                        <img className='w-full h-auto' src="/portada-2.jpg" alt="imagen de portada" />
                    </SlideShow>
                </div>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap gap-8 justify-center lg:items-center -m-8 lg:divide-x-2 divide-gray-200">
                        <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-16">
                            <div className='w-full text-xs lg:text-lg p-3 mb-1 leading-6 md:leading-8 lg:leading-10'>
                                <h2 className='font-extrabold text-center text-2xl md:text-4xl text-transparent bg-gradient-to-r from-blue-900  to-white bg-clip-text mb-4 md:mb-12 lg:mb-8 p-2'>Cronograma de pagos</h2>
                            </div>
                            <div className="md:max-w-m py-8 divide-y-2 divide-slate-300">
                                <div className='w-full text-xs lg:text-lg p-3 mb-1 leading-6 md:leading-8 lg:leading-10'>
                                    <h3 className='font-extrabold text-center text-xl md:text-2xl lg:3xl text-transparent bg-gradient-to-r from-gray-400  to-white bg-clip-text mb-4 md:mb-12 lg:mb-16 p-2'><i className='bi bi-coin me-2'></i>Premio hasta $300.000 por dia!!</h3>
                                </div>
                                <div className="py-5">
                                    <p className="text-xl text-center text-gray-300 font-semibold tracking-tight mb-3"><i className='bi bi-coin me-2'></i>Carga minima</p>
                                    <h3 className="mb-3 text-center w-full font-semibold inline-block text-3xl md:text-5xl lg:text-5xl tracking-tighter text-transparent bg-gradient-to-r from-white to-red-900 bg-clip-text uppercase">$1000</h3>
                                </div>
                                <div className="py-5">
                                    <p className="text-xl text-center text-gray-300 font-semibold tracking-tight mb-3"><i className='bi bi-coin me-2'></i>Descarga mínima</p>
                                    <h3 className="font-semibold w-full text-center mb-3 inline-block text-3xl md:text-5xl lg:text-5xl tracking-tighter text-transparent bg-gradient-to-r from-white to-red-900 bg-clip-text uppercase">$3000</h3>
                                </div>
                                <div className="py-5">
                                    <p className="text-xl text-center text-gray-300 font-semibold tracking-tight mb-3"><i className='bi bi-box-arrow-in-down me-2'></i>Bajadas de fichas por día</p>
                                    <h3 className="font-semibold w-full text-center mb-3 inline-block text-2xl md:text-3xl lg:text-4xl tracking-tighter text-transparent bg-gradient-to-r from-white to-red-900 bg-clip-text uppercase">Una bajada cada 24hs</h3>
                                </div>
                            </div>
                        </div>
                        <Horarios />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cronograma