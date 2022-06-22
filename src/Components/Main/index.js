import React from 'react'
import instagramLogo from '../../assets/owner/instagram.png';
import twitterLogo from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';

import './styles.css';

const Main = ({ activePunk }) => {
    console.log(activePunk);
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img
                        className='selectedPunk'
                        src={activePunk?.image_original_url}
                        alt=''
                    />
                </div>
            </div>
            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>{activePunk?.name}</div>
                <span className='itemNubmer'>#{activePunk?._id}</span>
            </div>
            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img
                        src={activePunk?.image_original_url}
                        alt=''
                    />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div className='ownerAddress'>0x76B6759516e487eE39DB618934FF98a6c144D92f</div>
                        <div className='ownerHandle'>Leo Goubard</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt='' />
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main