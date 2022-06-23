import React from 'react'
import weth from '../../assets/weth.png';

import './styles.css';

const  CollectionCard = ({ punk, setSelectedPunk }) => {
  const {
    token_id,
    name,
    traits,
    image_original_url,
  } = punk;
  return (
    <div className='collectionCard' onClick={() => setSelectedPunk(punk)}>
        <img src={image_original_url} alt='' />
        <div className='details'>
            <div className='name'>
                {name} <div className='id'> #{token_id}</div>
            </div>
            <div className='priceContainer'>
                <img src={weth} className='wethImage' alt='' />
                <div className='price'>{traits[0]?.value}</div>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard