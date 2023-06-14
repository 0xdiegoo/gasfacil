import { useEffect, useRef } from 'react';

const getId = (slot) => `atContainer-${slot}`;

const Adsterra1 = ({ slot }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current?.firstChild && slot) {
      const atAsyncOptions = {
        key: slot,
        format: 'js',
        async: true,
        container: getId(slot),
        params: {},
      };

      const conf = document.createElement('script');
      conf.innerHTML = `
        if (typeof atAsyncOptions !== 'object') var atAsyncOptions = [];
        atAsyncOptions.push(${JSON.stringify(atAsyncOptions, null, 2)});
      `;
      conf.type = 'text/javascript';

      const script = document.createElement('script');
      script.async = true;
      script.src = `//pl19726150.highrevenuegate.com/${slot}/invoke.js`;
      script.type = 'text/javascript';

      if (ref.current) {
        ref.current.appendChild(conf);
        ref.current.appendChild(script);
      }
    }
  }, [slot]);

  return (
    <>
      <div ref={ref} />
      <div id={getId(slot)} />
    </>
  );
};

export default Adsterra1;