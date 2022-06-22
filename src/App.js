import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import PunkList from './Components/PunkList';
import axios from 'axios';
import './App.css';
import Main from './Components/Main';

const App = () => {
  const [punkListData, setPunkListData] = useState([])
  const getMyNfts = async () => {
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x76B6759516e487eE39DB618934FF98a6c144D92f&order_direction=asc');
      setPunkListData(openSeaData.data.assets);
  }

  useEffect(() => {
      getMyNfts();
  }, [])
  return (
    <div className='app'>
      <Header />
      <Main activePunk={punkListData[1]} />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
