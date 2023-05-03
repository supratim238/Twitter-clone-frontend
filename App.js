import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'
import Tweet from './Tweet';

function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    try{
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets')
      setData(response.data)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
     <div style={{background: '#192841', padding: '30px'}}>
       {data.map(tweet => <Tweet {...tweet} />)}
     </div>
  );
}

export default App;
