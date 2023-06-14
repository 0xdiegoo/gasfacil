import { useEffect, useRef } from 'react';

const Banner = ({ index }) => {
  const bannerRef = useRef(null);

  const atOptions = {
    key: '5f0f0e9389135fa749af872435322af8',
    format: 'iframe',
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `window.atOptions = ${JSON.stringify(atOptions)}`;

      bannerRef.current.appendChild(conf);
      bannerRef.current.appendChild(script);
    }
  }, [index]); // Agrega "index" al arreglo de dependencias

  return <div ref={bannerRef} id={`banner-${index}`}></div>;
};

export default Banner;
