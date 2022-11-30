import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import axios from "axios";
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Service from './components/Service';

function App() {
  const baseURL = "https://8000-smcconaha-plantpeopleba-iy6u095z2ql.ws-us77.gitpod.io/config/services/"
  const [page, setPage] = useState ('Home');
  const [data, setData] = useState([]);
  
  useEffect(() => {
      axios.get(baseURL).then((response) => {
          setData(response.data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Service />
      {/* <Navbar handleClick={setPage}/>
      {page === 'Home' && 
        <Header /> &&
        <Service serviceData={data}/>
      }
      {page === 'Sign Up' && 
        <Header />
      }
      {page === 'Sign In' && 
        <Header />
      }
      {page === 'Help' && 
        <Header />
      } */}
    </>
  );
}

export default App;
