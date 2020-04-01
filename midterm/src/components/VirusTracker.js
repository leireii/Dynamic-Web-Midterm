import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

function VirusTracker() {
    const [countryID, setCountryID] = useState('us');
    const [statusID, setStatusID] = useState('confirmed');
    const [cases, setCases] = useState('');
    const [countryLabel, setCountryLabel] = useState('United States');
    let history = useHistory();

    
    useEffect(() => {
        // extract country value from URL
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);

        let countryID = urlParams.get('country');
        console.log("countryID", countryID);

        if (countryID) {
            setCountryID(countryID);
        }
        console.log("statusID", statusID);




        axios
            .get(`https://api.covid19api.com/total/country/${countryID}/status/${statusID}`)
            .then(function (response) {
                // success
                // live data is returned in list... choose last item in list (most recent data, based on perusal of documentation)
                let responseList = response.data;
                console.log(responseList);
                let listPlace = (responseList.length) - 1;
                setCases(responseList[listPlace].Cases);
                setCountryLabel(responseList[listPlace].Country)
                console.log("US", cases);

            })
            .catch(function (error) {
                // error
                console.log(error);
            })

    });

    return (
        <div className="virusTracker">
            <h1 className="caseNumber">{cases}</h1>
            <h2 className="virusTrackerLabel">{statusID} in {countryLabel}</h2>
            <div>
                <button className="statusButton" onClick={() => setStatusID('confirmed')}>
                    Confirmed
                </button>

                <button className="statusButton" onClick={() => setStatusID('recovered')}>
                    Recovered
                </button>
                <button className="statusButton" onClick={() => setStatusID('deaths')}>
                    Deaths
                </button>
            </div>
        </div>
    )
}

export default VirusTracker;