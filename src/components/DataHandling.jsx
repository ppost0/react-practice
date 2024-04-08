import { useState, useEffect } from 'react';
import '../App.css';


const DataHandling = () => {

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {

    const fetchFinnhub = async () => {

      try{
        const response = await fetch('https://finnhub.io/api/v1/stock/financials-reported?symbol=AAPL&token=co8u5hpr01qj5gtjc4r0co8u5hpr01qj5gtjc4rg');
        console.log(response);
        const data = await response.json();
        console.log(data.data);

        const entries = [];
        for (let i = 0; i < data.data.length; i++) {
          console.log(i);
          entries.push(
            <p className='data-entry'>
              {JSON.stringify(data.data[i])}
            </p>
          )
        }
        setCurrentData(entries);
        console.log(currentData);
      } catch(error) {
        console.error('Error fetching Finnhub data:', error)
      }

    }



    fetchFinnhub();


  }, [])




  return (
    <section className='data-handling-container'>
      <h1>Data Handling section:</h1>
      <div>
        {currentData}
      </div>
    </section>
  )
}

export default DataHandling;