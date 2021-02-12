import React from "react";

function Form(props) {
    return (
        <div class="w3-content w3-container w3-padding-64">
            <form action="/submit" method="post">
                <div class="banner">
                </div>
                <div class="item">
                    <label for="name">Campaign Name<span>*</span></label>
                    <div class="name-item">
                        <input id="title" type="text" name="campaignName" placeholder="Give your campaign a name" />
                    </div>
                </div>
                <div class="item">
                    <label for="campaignDesc">Campaign Description<span>*</span></label>
                    <input id="description" type="text" name="campaignDesc" placeholder="Describe the issue" />
                </div>
                <div class="item">
                    <label for="donation">Recommended donation<span>*</span></label><br></br>
                    <input id="donation" type="number" name="RecDonation" required />
                    <button>$10</button>
                    <button>$20</button>
                    <button>$50</button>
                    <button>$100</button>
                </div>
                <div class="date">
                    <label for="startDate">Start camapign</label>
                    <input type="date" name="startDate" id="startDate" />
                </div>
                <div class="date">
                    <label for="endDate">End camapign</label>
                    <input type="date" name="endDate" id="endDate" />
                </div>
                <div class="caseStudy">
                    <label>Select a case study</label>
                </div>

                <div class="item">
                    <label for="caseStudy">Case Study</label>
                    <input id="caseStudy" type="text" name="caseStudy" />
                </div>
            </form>

            <button class="w3-button w3-padding-large w3-light-grey center" id="submit-btn" position="relative">BUILD MY CAMPAIGN</button>
        
        </div>
    )
}
export default Form;
