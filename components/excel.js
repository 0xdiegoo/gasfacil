import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelUploader = () => {
  const [data, setData] = useState([]);

  const convertExcelToArray = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        resolve(jsonData);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertExcelToArray(file)
        .then((dataArray) => {
          setData(dataArray);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <div>
        {data.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <span key={j}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcelUploader;
