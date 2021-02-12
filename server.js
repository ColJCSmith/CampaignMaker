// Dependencies
// =======================================
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const db = require("./models")
// const db = 'mongodb://localhost/CampaignBuilderDB'
const PORT = process.env.PORT || 3001;

// Define Express as the middleware
// =======================================
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://Project_Admin:Sc**byd00@cluster0.lxp4x.mongodb.net/campaignSchema?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
// Fallback if connection to Mongo DB is not working
// Mongoose.connect(db)


// (DATA)
// =============================================================
const campaigns = [
  {
    routeName: "bushfires",
    title: 'Bushfires in Canberra',
    description: "The nation's capital is on fire and no one cares!!",
    donation: 2,
    caseStudy: 'Vera'
  },
  {
    routeName: "COVID",
    title: 'COVID in Liverpool',
    description: "The West is dying!",
    donation: 20,
    caseStudy: 'Ken'
  },
  {
    routeName: "mentalhealth",
    title: 'Mental Health in Brisbane',
    description: "Lockdown is biting",
    donation: 10,
    caseStudy: 'Sarah'
  }
];

db.Campaign.create(campaigns)
  .then(dbCampaign => {
    console.log(dbCampaign);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// Routes
// =============================================================

// Use apiRoutes
app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

// Displays all campaigns
app.get("/api/campaigns", function (req, res) {
  return res.json(campaigns);
});

// Displays a single campaign, or returns false
app.get("/api/campaigns/:campaign", function (req, res) {
  let chosen = req.params.campaign;

  console.log(chosen);

  for (let i = 0; i < campaigns.length; i++) {
    if (chosen === campaigns[i].routeName) {
      return res.json(campaigns[i]);
    }
  }

  return res.json(false);
});

// Create New Campaigns - takes in JSON input
app.post("/api/campaigns", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCampaign = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCampaign.routeName = newCampaign.title.replace(/\s+/g, "").toLowerCase();

  console.log(newCampaign);
  campaigns.push(newCampaign);
  res.json(newCampaign);
});

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
