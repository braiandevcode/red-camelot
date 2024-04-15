import JsonData from "./JsonData";

const FaqSection = () => {
    return (
        <>
            <div className="mb-4">
                <div className="w-full md:w-full P-3 mb-4">
                    <h2 className="font-extrabold text-2xl md:text-4xg lg:text-6xl text-transparent bg-gradient-to-r p-1 md:p-4 from-blue-900  to-white bg-clip-text tracking-tighter">Preguntas Frecuentes<i className='bi bi-question-circle ms-2'></i></h2>
                </div>
                <section className="py-8 lg:py-16 bg-black overflow-hidden mb-12 rounded-md">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -m-8">
                            <div className="w-full p-2 lg:p-8 text-white">
                                <JsonData />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FaqSection;