import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import PunkList from './Components/PunkList';
import axios from 'axios';
import './App.css';
import Main from './Components/Main';

const App = () => {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState();

  const getMyNfts = async () => {
      const openSeaData = await axios.get(process.env.REACT_APP_API_ADDRESS);
      if (openSeaData) {
        setPunkListData(openSeaData.data.assets);
        setSelectedPunk(openSeaData.data.assets[2])
      }
      return openSeaData;
  }

  useEffect(() => {
      getMyNfts();
  }, [])
  
  return (
    <div className='app'>
      <Header />
      {selectedPunk && <Main activePunk={selectedPunk} />}
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
