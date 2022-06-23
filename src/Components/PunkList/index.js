import React from 'react'
import CollectionCard from '../CollectionCard'

import './styles.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className='punkList'>
        {punkListData.map(punkItem => (
            <div key={punkItem.token_id} >
                <CollectionCard
                    punk={punkItem}
                    setSelectedPunk={setSelectedPunk}
                />
            </div>
        ))}
    </div>
  )
}

export default PunkList