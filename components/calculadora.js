import React, { useState } from 'react';

const CaidaPresion = () => {
  const [accesorios, setAccesorios] = useState({
    codo: {},
    t90: {},
    tAtraves: {},
    llavePaso: {}
  });
  const [presion, setPresion] = useState(0);
  const [objetosConstruidos, setObjetosConstruidos] = useState([]);
  const [nombreArtefacto, setNombreArtefacto] = useState('');

  const accesoriosValores = {
    codo: {
      13: 0.39,
      19: 0.57,
      25: 0.75,
      32: 0.96,
      38: 1.14,
      51: 1.53
    },
    t90: {
      13: 0.78,
      19: 1.14,
      25: 1.50,
      32: 1.92,
      38: 2.28,
      51: 3.06
    },
    tAtraves: {
      13: 0.26,
      19: 0.38,
      25: 0.50,
      32: 0.64,
      38: 0.76,
      51: 1.02
    },
    llavePaso: {
      13: 1.30,
      19: 1.90,
      25: 2.50,
      32: 3.20,
      38: 3.80,
      51: 5.10
    }
  };

  const handleAccesorioCantidadChange = (e, accesorio, diametro) => {
    const cantidad = parseInt(e.target.value);
    setAccesorios((prevAccesorios) => ({
      ...prevAccesorios,
      [accesorio]: {
        ...prevAccesorios[accesorio],
        [diametro]: cantidad
      }
    }));
  };

  const calcularCaidaPresion = () => {
    let presionTotal = 0;

    for (const accesorio in accesorios) {
      const accesorioDiametros = accesorios[accesorio];

      for (const diametro in accesorioDiametros) {
        // Use 0 as a default value if cantidad or valor are undefined
        const cantidad = accesorioDiametros[diametro] || 0;
        const valor = accesoriosValores[accesorio][diametro] || 0;
        presionTotal += cantidad * valor;
      }
    }

    setPresion(presionTotal);
  };

  const guardarObjetoConstruido = () => {
    const nuevoObjetoConstruido = { nombreArtefacto, accesorios, presion };
    setObjetosConstruidos((prevObjetosConstruidos) => [
      ...prevObjetosConstruidos,
      nuevoObjetoConstruido
    ]);
    setAccesorios({
      codo: {},
      t90: {},
      tAtraves: {},
      llavePaso: {}
    });
    setPresion(0);
  };
  const handleNombreArtefactoChange = (e) => {
    setNombreArtefacto(e.target.value);
  };

  return (
    <div>
      <h4>Accesorios:</h4>
      <div><h3>Artefacto</h3>
      <input type="text" value={nombreArtefacto} onChange={handleNombreArtefactoChange} />

      </div>
      
      <div>
        <h5>Codo:</h5>
        {Object.keys(accesoriosValores.codo).map((diametro) => (
          <div key={`codo-${diametro}`}>
            <span>{diametro}</span>
            <input
              type="number"
              value={accesorios.codo[diametro] || ''}
              onChange={(e) => handleAccesorioCantidadChange(e, 'codo', diametro)}
            />
          </div>
        ))}
      </div>

      <div>
        <h5>T90:</h5>
        {Object.keys(accesoriosValores.t90).map((diametro) => (
          <div key={`t90-${diametro}`}>
            <span>{diametro}</span>
            <input
              type="number"
              value={accesorios.t90[diametro] || ''}
              onChange={(e) => handleAccesorioCantidadChange(e, 't90', diametro)}
            />
          </div>
        ))}
      </div>

      <div>
        <h5>T Atraves:</h5>
        {Object.keys(accesoriosValores.tAtraves).map((diametro) => (
          <div key={`tAtraves-${diametro}`}>
            <span>{diametro}</span>
            <input
              type="number"
              value={accesorios.tAtraves[diametro] || ''}
              onChange={(e) => handleAccesorioCantidadChange(e, 'tAtraves', diametro)}
            />
          </div>
        ))}
      </div>

      <div>
        <h5>Llave de Paso:</h5>
        {Object.keys(accesoriosValores.llavePaso).map((diametro) => (
          <div key={`llavePaso-${diametro}`}>
            <span>{diametro}</span>
            <input
              type="number"
              value={accesorios.llavePaso[diametro] || ''}
              onChange={(e) => handleAccesorioCantidadChange(e, 'llavePaso', diametro)}
            />
          </div>
        ))}
      </div>

 
      <button onClick={calcularCaidaPresion}>Calcular</button>

      <p>Caída de Presión Total: {presion}</p>

      {objetosConstruidos.length > 0 && (
        <div>
          <h4>Objetos Construidos:</h4>
          {objetosConstruidos.map((objeto, index) => (
            <div key={index}>
              <h5>{objeto.nombreArtefacto}</h5>
              <p>Longitud Equivalente: {objeto.presion}</p>
              <p>Accesorios:</p>
          <ul>
            {Object.keys(objeto.accesorios).map((accesorio) => (
              <li key={accesorio}>
                <strong>{accesorio}</strong>
                <ul>
                  {Object.keys(objeto.accesorios[accesorio]).map((diametro) => (
                    <li key={`${accesorio}-${diametro}`}>
                      {diametro}: {objeto.accesorios[accesorio][diametro]}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
            </div>
          ))}
        </div>
      )}

      {presion > 0 && (
        <button onClick={guardarObjetoConstruido}>Guardar Objeto</button>      
        )}
    </div>
  );
};

export default CaidaPresion;
