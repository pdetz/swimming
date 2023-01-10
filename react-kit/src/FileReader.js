import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

function useCSV(fileName) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/files/${fileName}`)
      .then(response => {
        const csvData = Papa.parse(response.data, { header: true }).data;
        setData(csvData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return data;
}

export default useCSV;
