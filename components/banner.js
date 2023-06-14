import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Banner = () => {
  const router = useRouter();

  const atOptions = {
    key: '5f0f0e9389135fa749af872435322af8',
    format: 'iframe',
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    const conf = document.createElement('script');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
    conf.innerHTML = `window.atOptions = ${JSON.stringify(atOptions)}`;

    document.getElementById('banner-container').appendChild(conf);
    document.getElementById('banner-container').appendChild(script);
  }, []);

  return (
    <div id="banner-container">
      <Head>
        <script src={`//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`} />
      </Head>
    </div>
  );
};

export default Banner;