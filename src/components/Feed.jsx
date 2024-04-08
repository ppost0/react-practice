import { useState, useEffect } from 'react';
import '../App.css';

const Feed = () => {

  const [shibaFeed, setShibaFeed] = useState('');

  const refreshPage = () => {
    window.location.reload();
  }



  useEffect(() => {

    const fetchShiba = async () => {

      try {
        const response = await fetch('http://shibe.online/api/shibes?count=4&urls=true&httpsUrls=true');
        const data = await response.json();

        const shibaPics = [];

        for (let i = 0; i < data.length; i++) {
          shibaPics.push(
            <img src={data[i]} alt='Random Shiba' key={i} width='400px' />
          );
        }


        setShibaFeed(shibaPics);

      } catch (error) {
        console.error('Error fetching image:', error);
      }


    }

    fetchShiba();

  }, [])



  return(
    <section className='feed-container'>
      <h1>Here's the feed:</h1>
      <div className='button-container'>
        <button onClick={refreshPage}>Refresh</button>
      </div>
      <div className='shiba-feed-container'>
        {shibaFeed}
      </div>

    </section>
  )

}

export default Feed;