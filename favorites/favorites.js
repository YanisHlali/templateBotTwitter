const bot = require("../twit");

async function likeTweet(tweetId) {
  bot.post("favorites/create", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
};

async function cancelLikeTweet(tweetId) {
  bot.post("favorites/destroy", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
};

async function getLikeTweet(userId) {
  return new Promise((resolve, reject) => {
    bot.get("favorites/list", { user_id: userId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

module.exports = {
    likeTweet,
    cancelLikeTweet,
    getLikeTweet
}