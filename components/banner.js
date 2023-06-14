import { useEffect } from 'react';
import Script from 'next/script';

const Banner = () => {
  const atOptions = {
    key: '5f0f0e9389135fa749af872435322af8',
    format: 'iframe',
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    const conf = `window.atOptions = ${JSON.stringify(atOptions)};`;
    const script = document.createElement('script');
    script.innerHTML = conf;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Script src={`//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`} strategy="afterInteractive" />
      <div id="banner-container"></div>
    </>
  );
};

export default Banner;