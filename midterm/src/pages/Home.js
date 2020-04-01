import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

// import other components
import Sidebar from '../components/Sidebar'
import VirusTracker from '../components/VirusTracker';
import Fundraiser from '../components/Fundraiser';
const virusIcon = <FontAwesomeIcon className="virusIcon" icon={faVirus} />

function Home() {



    return (
        <div>
            <div className="home">
                <Sidebar />
                <VirusTracker />
                <div className="virusContainer">
                    {virusIcon}
                </div>
            </div>
            <Fundraiser />
        </div>
    )

}

export default Home;