import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import axios from "axios";
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Service from './components/Service';
import { Outlet } from "react-router-dom";
import { useGlobalState } from './context/GlobalState';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
