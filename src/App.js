import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


const App = () => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    <div>
      {
        loading ? <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
          <Loader
            type="Bars"
            color="#FFB912"
            height={100}
            width={100}
          />
        </div>
          :
          <Home></Home>
      }

    </div>
  );
};

export default App;