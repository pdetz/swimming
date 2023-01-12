import { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

function useFetchCSV(fileName, dataTransform = null) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4000/files/${fileName}`);
        const csvData = Papa.parse(response.data, { header: true }).data;
        if (dataTransform) {
          setData(dataTransform(csvData));
        } else {
          setData(csvData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchData();
  }, [fileName, dataTransform]);

  return [data, setData, isLoading];
}

export { useFetchCSV };