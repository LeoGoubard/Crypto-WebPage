import React from 'react'
import CollectionCard from '../CollectionCard'

import './styles.css';

const PunkList = ({ punkListData }) => {
  return (
    <div className='punkList'>
        {punkListData.map(punkItem => (
            <div>
                <CollectionCard
                    key={punkItem.token_id}
                    id={punkItem.token_id}
                    name={punkItem.name}
                    traits={punkItem.traits}
                    image={punkItem.image_original_url}
                />
            </div>
        ))}
    </div>
  )
}

export default PunkList