import React, { useEffect, useState } from 'react';
import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
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
