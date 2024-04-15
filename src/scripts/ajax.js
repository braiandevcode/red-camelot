// api.js

export const getQuestions = async () => {
    const API = import.meta.env.VITE_URL;
    console.log(API)
    try {
      const RES = await fetch(API);
      if (!RES.ok) {
        throw {
          status: RES.status,
          statusText: RES.statusText
        };
      }
      const DATA = await RES.json();
      return DATA;
    } catch (error) {
      console.log(error)
      let statusErrorNumber = error.status || 400;
      let statusErrorText = error.statusText || 'Fallo la lectura de archivo';
      const MESSAGE = `Error ${statusErrorNumber}: ${statusErrorText}`;
      console.error(MESSAGE);
      return [];
    }
  };

  export const getImages = async () => {
    const API = import.meta.env.VITE_URL_IMAGES;
    try {
      const RES = await fetch(`${API}`);
      if (!RES.ok) {
        throw {
          status: RES.status,
          statusText: RES.statusText
        };
      }
      const DATA = await RES.json();
      if(!DATA) return;
      return DATA.url;
    } catch (error) {
      let statusErrorNumber = error.status || 400;
      let statusErrorText = error.statusText || 'Fallo la lectura de archivo';
      const MESSAGE = `Error ${statusErrorNumber}: ${statusErrorText}`;
      console.error(MESSAGE);
      return [];
    }
  };