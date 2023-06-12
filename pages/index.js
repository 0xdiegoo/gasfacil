import React, { useState } from 'react';
import { diametros } from '../src/diametros';
import CaidaPresion from '../components/calculadora'
import { columnNames } from '../src/columnas';
import styles from './styles.module.css'
const CompararInputs = () => {
  const [inputs, setInputs] = useState(Array(20).fill().map(() => ({})));

  const compararDatos = () => {
    const updatedInputs = [...inputs];
    for (let i = 0; i < updatedInputs.length; i++) {
      const distancia = parseInt(updatedInputs[i]['Distancia a medidor']);
      const consumo = parseInt(updatedInputs[i]['Consumo']);
  
      let diametroProvisorio = '';
  
      for (let j = 0; j < diametros.length; j++) {
        const diametro = diametros[j][0];
        const consumoMaximo = diametros[j][1];
        const longitud = diametros[j][2];
  
        if (distancia <= longitud && consumo <= consumoMaximo) {
          diametroProvisorio = diametro.toString();
          break;
        }
      }
  
      updatedInputs[i]['Diametro Ø Provisorio'] = diametroProvisorio;
      updatedInputs[i]['Resultado'] = diametroProvisorio;
    }
  
    setInputs(updatedInputs);
  };

  const compararDatos3 = () => {
    const updatedInputs = [...inputs];
    for (let i = 0; i < updatedInputs.length; i++) {
      const longEquivalente = parseInt(updatedInputs[i]['Longitud equivalente']);
      const distanciaMedidor = parseInt(updatedInputs[i]['Distancia a medidor'])
      const result = longEquivalente + distanciaMedidor;
      updatedInputs[i]['Longitud rectificada'] = result.toString();
    };

    setInputs(updatedInputs);
  }

  const compararDatos2 = () => {
    const updatedInputs = [...inputs];
    for (let i = 0; i < updatedInputs.length; i++) {
      const distancia = parseInt(updatedInputs[i]['Longitud rectificada']);
      const consumo = parseInt(updatedInputs[i]['Consumo']);
  
      let diametroFinal = '';
      let consumoFinal = '';

      for (let i = 0; i < updatedInputs.length; i++) {
        const value = parseInt(updatedInputs[i].Consumo);
        const divisor = parseInt(updatedInputs[i]['Caudal Final'])
        const result = value / divisor;
        updatedInputs[i]['% Final'] = result.toString();
      };
     
  
      for (let j = 0; j < diametros.length; j++) {
        const diametro = diametros[j][0];
        const consumoMaximo = diametros[j][1];
        const longitud = diametros[j][2];
  
        if (distancia <= longitud && consumo <= consumoMaximo) {
          diametroFinal = diametro.toString();
          consumoFinal = consumoMaximo.toString();
          break;
        }
      }
  
      updatedInputs[i]['Diametro Ø Final'] = diametroFinal;
      updatedInputs[i]['Caudal Final'] = consumoFinal;
    }
  
    setInputs(updatedInputs);
  };
  

  const dividirInput2 = () => {
    const updatedInputs = [...inputs];
    for (let i = 0; i < updatedInputs.length; i++) {
      const value = parseInt(updatedInputs[i].Consumo);
      const dividedValue = value / 9.3;
      const roundedValue = Math.ceil(dividedValue);
      updatedInputs[i].Consumo = roundedValue.toString();
    }
    setInputs(updatedInputs);
  };

  const handleInputChange = (e, index, columnName) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][columnName] = e.target.value;
    setInputs(updatedInputs);
  };

  const renderInputs = () => {
    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columnNames.map((columnName) => (
                <th key={columnName}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {inputs.map((input, index) => (
              <tr key={index}>
                {columnNames.map((columnName) => (
                  <td key={columnName}>
                    <input
                      type="text"
                      value={input[columnName] || ''}
                      onChange={(e) => handleInputChange(e, index, columnName)}
                      className={columnName === '% Final' ? styles.minWidthInput : '' }
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderInputs()}
      <div className={styles.buttonsContainer}>
      <button className={styles.button} onClick={dividirInput2}>
          Dividir
        </button>
        <button className={styles.button} onClick={compararDatos}>
          Diametro Prov
        </button>
      
        <button className={styles.button} onClick={compararDatos3}>
          Longitud Rectificada
        </button>
        <button className={styles.button} onClick={compararDatos2}>
          Diametro Final
        </button>
      </div>
      <div className={styles.calculadoraContainer}>
        <CaidaPresion />
      </div>
    </div>
  );
};


export default CompararInputs;
