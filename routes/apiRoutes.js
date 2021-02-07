const router = require("express").Router();
const db = require("../models");

router.get("/campaign", (req, res) => {
  db.Campaign.find({
    title: { $regex: new RegExp(req.query.q, 'i') }
  })
    .then(campaigns => res.json(campaigns))
    .catch(err => res.status(422).end());
});

router.get("/caseStudy", (req, res) => {
  db.CaseStudy.find({
    title: { $regex: new RegExp(req.query.q, 'i') }
  })
    .then(caseStudy => res.json(caseStudy))
    .catch(err => res.status(422).end());
});


// NEEDS UPDATE

router.post("/submit", ({ body }, res) => {
  db.Campaign.create(body)
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
