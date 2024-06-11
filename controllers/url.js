const shortid = require("shortid");
const URL = require("../models/url");

async function generateShortUrl(req, res) {
  const shortId = shortid.generate()
  const body = req.body;

  console.log("urll",body)

  if (!body.url) return res.status(400).json({ error: "url is required" });
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
  });

  return res.json({ id: shortId });
}

module.exports = {
  generateShortUrl,
};
