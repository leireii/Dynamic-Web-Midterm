import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <h2>COUNTRY</h2>
            </div>
         
            <div className="sidebarNav">

                <a href="/?country=brazil">Brazil</a><br></br>
                <a href="/?country=china">China</a><br></br>
                <a href="/?country=iran">Iran</a><br></br>
                <a href="/?country=italy">Italy</a><br></br>
                <a href="/?country=japan">Japan</a><br></br>
                <a href="/?country=spain">Spain</a><br></br>
                <a href="/?country=south-africa">South Africa</a><br></br>
                <a href="/?country=korea-south">South Korea</a><br></br>
                <a href="/?country=united-kingdom">United Kingdom</a><br></br>
                <a href="/?country=us">United States</a><br></br>
            </div>
        </div>
    );
}

export default Sidebar;