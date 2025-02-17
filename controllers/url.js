const shortid = require("shortid");
const URL = require("../models/url");


async function HandleGenrateNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ Error: "url is required" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy : req.user._id,
  });
  return res.render('home' , { id: shortID }
    
  );

}

async function HandleGetAnalytics(req , res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory,
    })
    
}

module.exports = {
  HandleGenrateNewUrl,
  HandleGetAnalytics,
  
};
