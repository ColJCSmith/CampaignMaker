// REQUIRES TESTING
// ===========================================

import React, { useState, useEffect } from "react";

function Microsite() {
    useEffect(() => {
        fetchCampaign();
    }, [])

    const [campaign, setCampaign] = useState([]);

    const fetchCampaign = async () => {
        const data = await fetch(
            'XXXXXXXXXXXX'
        );

        const campaign = await data.json();
        console.log(campaign);
        setCampaign(campaign);
    };

    return (
        <div>
            {campaign.map(campaign => (
                <h1>{campaign.name}</h1>
            ))}
        </div>
    )
}

export default Microsite;