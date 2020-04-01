import React, { useEffect, useState } from 'react';
import axios from 'axios';

// API Values
const globalGivingKey = '73880245-8b9c-45ac-aa1b-c11f28d73d0c'
const fundraiserId = '44686';

function Fundraiser() {
    // info variables
    const [fundraiserTitle, setFundraiserTitle] = useState('');
    const [fundraiserImage, setFundraiserImage] = useState('');
    const [fundraiserSummary, setFundraiserSummary] = useState('');
    const [fundraiserLink, setFundraiserLink] = useState('');

    // donation meter variables
    const [fundraiserGoal, setFundraiserGoal] = useState('');
    const [fundraiserFunding, setFundraiserFunding] = useState('');
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        axios
            .get(`https://api.globalgiving.org/api/public/projectservice/projects/${fundraiserId}?api_key=${globalGivingKey}`)
            .then(function (response) {
                // handle success
                let fundraiserData = response.data;
     
                // basic fundraiser info
                setFundraiserTitle(fundraiserData.project.title);
                setFundraiserImage(fundraiserData.project.image.imagelink[4].url);
                setFundraiserSummary(fundraiserData.project.summary);

                // fundraiser img
                setFundraiserLink(fundraiserData.project.projectLink);

                // donation meter variables
                setFundraiserGoal(fundraiserData.project.goal);
                setFundraiserFunding(fundraiserData.project.funding);
                setProgress(((fundraiserFunding / fundraiserGoal) * 100));
            })
            .catch(function (error) {
                console.log("ERROR:", error);
            })
    });


    return (
        <div className="fundraiser">
            
            {/* FUNDRAISER IMAGE */}
            <img className="fundraiserImage" src={fundraiserImage} alt="A crowd of several people, two of them wearing protective face masks"></img>
            
            {/* FUNDRAISER INFORMATION */}
            <div className="fundraiserInfo">
                <h1 className="fundraiserTitle">{fundraiserTitle}</h1>
                <p>{fundraiserSummary}</p>
                <br></br>
                <a className="fundraiserLink" href={fundraiserLink}>DONATE NOW</a>
            </div>
            
            {/* DONATION METER */}
            <div className="donationMeterSpace">
                <div className="donationMeter">
                    <div style={{
                        flexBasis: `${100 - progress}%`,
                        backgroundColor: '#e7e7e7'
                    }}>
                        <h3>${fundraiserGoal}</h3>
                    </div>

                    <div style={{ backgroundColor: 'rgba(165, 232, 151, 0.473)', flexBasis: `${progress}%`, }}>
                        <h3>${fundraiserFunding}</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Fundraiser;