import React, { useState, useEffect, useRef } from 'react';
const TextAnimation = ({ text, clase }) => {
    const textoRef = useRef('');
    const [render, setRender] = useState(false);
    const mensaje = text;
    const velocidad = 200;
    let i = 0;

    useEffect(() => {
      const interval = setInterval(() => {
        if (i <= mensaje.length) {
          textoRef.current += mensaje.charAt(i);
          setRender((prevRender) => !prevRender);
          i++;
        } else {
          textoRef.current = '';
          setRender((prevRender) => !prevRender);
          i = -1;
        }
      }, velocidad);
      return () => clearInterval(interval);
    }, []);
  return (
    <>
       <div className="mb-3 p-3 md-p-4 mx-auto">
        <h3 className={clase}>
          {textoRef.current}
        </h3>
      </div>
    </>
  )
}

export default TextAnimation