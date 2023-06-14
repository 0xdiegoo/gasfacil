import { useEffect, useRef } from 'react';

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const atOptions = {
      key: '5f0f0e9389135fa749af872435322af8',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {},
    };

    if (bannerRef.current && !bannerRef.current.firstChild) {
      const iframe = document.createElement('iframe');
      iframe.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.html`;
      iframe.height = atOptions.height;
      iframe.width = atOptions.width;
      iframe.frameBorder = 0;

      bannerRef.current.appendChild(iframe);
    }
  }, []);

  return <div ref={bannerRef}></div>;
};

export default Banner;