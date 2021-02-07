import './index.css';

function App() {
  return (

    <div class="testbox">
      <form action="/">
        <div class="banner">
          <h1>Build a new campaign</h1>
        </div>
        <div class="item">
          <label for="name">Campaign Name<span>*</span></label>
          <div class="name-item">
            <input id="campaignName" type="text" name="campaignName" placeholder="Give your campaign a name" />
          </div>
        </div>
        <div class="item">
          <label for="campaignDesc">Campaign Description<span>*</span></label>
          <input id="campaignDesc" type="text" name="campaignDesc" placeholder="Describe the issue" />
        </div>
        <div class="btn-group">
          <label for="RecDonation">Recommended donation<span>*</span></label><br></br>
          {/* <input id="RecDonation" type="btn-group" name="RecDonation" required /> */}
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
          <div class="question-answer">
            <div>
              <input type="radio" value="none" id="radio_1" name="availability" />
              <label for="radio_1" class="radio"><span>Initial availability form for this week</span></label>
            </div>
            <div>
              <input type="radio" value="none" id="radio_2" name="availability" />
              <label for="radio_2" class="radio"><span>Updated availability form for this week</span></label>
            </div>
          </div>
        </div>

        <div class="item">
          <label for="sunday">Time you are available for Sunday</label>
          <input id="sunday" type="text" name="language" />
        </div>
        <div class="item">
          <label for="comment">Comments/Explanations/Exceptions</label>
          <textarea id="comment" rows="3"></textarea>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">Create Campaign</button>
        </div>
      </form>
    </div>
  );
}

export default App;
