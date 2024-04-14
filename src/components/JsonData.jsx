import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getQuestions } from '../scripts/ajax.js';

const  JsonData  = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const fatherContainer = useRef(null);
    const [questionsData, setQuestionsData] = useState([]);

    const handleClick = (index, e) => {
        e.preventDefault();
        setActiveIndex(index);
        const TEXT = fatherContainer.current.children[index].children[0].children[1];
        TEXT.classList.toggle('hidden');
    };
    useEffect(() => {
        const fetchData = async ()=>{
            const data = await getQuestions();
            setQuestionsData(data);
        }
        fetchData()
    }, []);

    return (
        <>
            <div className="flex flex-wrap -m-1.5" ref={fatherContainer}>
                {questionsData.map((res, i) => (
                    <div className="w-full p-1.5" key={i}>
                        <Link
                            className={`block p-6 border border-gray-200 hover:border-gray-300 rounded-md transition duration-200 ${activeIndex === i ? 'active' : ''
                                }`}
                            to="#"
                            onClick={(e) => handleClick(i, e)}
                        >
                            <div className="flex items-center justify-between -m-2">
                                <div className="w-auto p-2">
                                    <h3 className="text-sm md:text-2xl text-transparent bg-gradient-to-r from-blue-900  to-white bg-clip-text font-semibold tracking-tight">{res.question}</h3>
                                </div>
                                <div className="w-auto p-">
                                    <svg
                                        width="9"
                                        height="14"
                                        viewBox="0 0 9 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335"
                                            stroke="#FFF"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <p className={activeIndex === i ? 'mt-6 tracking-tight' : 'hidden mt-6 tracking-tight'}>{res.answer}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default  JsonData;