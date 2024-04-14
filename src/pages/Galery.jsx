import { useEffect, useState, useRef } from "react";
import { getImages } from "../scripts/ajax.js";
import SlideShow from "../components/SlideShow.jsx";
import Buttons from "../components/Buttons.jsx";

const Galery = () => {
    const [imagesData, setImagesData] = useState([]);
    const [showFullScreen, setShowFullScreen] = useState(false);
    const [fullScreenImage, setFullScreenImage] = useState(null);
    const slideShow = useRef(null);

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

    const handlePrev = () => {
        if (slideShow.current.children.length > 0) {
            const index = slideShow.current.children.length - 1;
            const lastChild = slideShow.current.children[index];
            slideShow.current.insertBefore(lastChild, slideShow.current.firstChild);

            const sizesSlide = slideShow.current.children[0].offsetWidth;

            slideShow.current.style.transition = 'none';
            slideShow.current.style.transform = `translateX(-${sizesSlide}px)`;

            setTimeout(() => {
                slideShow.current.style.transition = '300ms ease-out';
                slideShow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    const handleOnClick = (image) => {
        setShowFullScreen(true);
        setFullScreenImage(image);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getImages(imagesData);
            setImagesData(data);
        };
        fetchData();
    }, []);

    const img = imagesData;
    return (
        <>
            <section className="py-10 lg:px-10 lg:py-20">
                <div className='w-full rounded-lg text-xs lg:text-lg mb-3 leading-6 md:leading-8 lg:leading-10 divide-y-2 divide-white'>
                    <h2 className='font-extrabold p-0 md:py-2 text-center text-2xl md:text-5xl text-transparent bg-gradient-to-r from-yellow-400 to-red-700 bg-clip-text mb-2'>Galería de premios</h2>
                    <h3 className='text-lg block text-center md:text-1xl lg:text-2xl text-gray-200 p-4'>Esta es la galería de imagenes de mis clientes ganadores, el proximo podes ser vos🤑🤑!!</h3>
                </div>
                <div className="container mx-auto p-5 relative overflow-x-hidden">
                    <SlideShow r_ref={slideShow}>
                        {img.map((image, i) => (
                            <div className="flex justify-center mx-auto slide" key={i} id={i}>
                                <img
                                    className="w-full h-72 rounded-lg img_bg md:cursor-pointer"
                                    src={image}
                                    alt={`imagen de premio`}
                                    onClick={() => handleOnClick(image)}
                                />
                            </div>
                        ))}
                    </SlideShow>
                    <Buttons clase={'absolute top-1/2 left-0 transform -translate-y-1/2'} onClick={handlePrev} >
                        <i className="bi bi-arrow-left-circle-fill text-lg"></i>
                    </Buttons>
                    <Buttons clase={'absolute top-1/2 right-0 transform -translate-y-1/2'} onClick={handleNext}>
                        <i className="bi bi-arrow-right-circle-fill text-lg"></i>
                    </Buttons>
                </div>
            </section>
            {showFullScreen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center"
                    onClick={() => setShowFullScreen(false)}
                >
                    <img
                        className="max-h-full max-w-full object-cover"
                        src={`${fullScreenImage}`}
                        alt="Full screen image"
                    />
                </div>
            )}
        </>
    );
};

export default Galery;