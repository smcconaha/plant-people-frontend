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
  const activePage = 'Home'
  
  const componentArr = []
  const [page, setPage] = useState (activePage);
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
          setData(response.data);
      });
  }, []);
  const objComp = {
    Home: <><Navbar /> <Header searchData={data} /> <Service serviceData={data}/></>,
  }

  for(let key in objComp) {
    if(key == page) {
      componentArr.push(objComp[key])
    }
  }

  return (
    <>
      <Navbar
      page={page}
      setPage={setPage}
      />

      <div>{componentArr}</div>
    </>
  );
}

export default App;
