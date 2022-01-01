const bot = require("../twit");

async function retweet(id) {
  bot.post("statuses/retweet", { id: id }, (err, result) => {
    if (err) throw err;
  });
}

async function cancelRetweet(id) {
  bot.post("statuses/unretweet", { id: id }, (err, result) => {
    if (err) throw err;
  });
}

async function getRetweet(userId) {
  return new Promise((resolve,reject) => {
    bot.get('statuses/retweets', { id: userId }, (err,result) => {
      if (err) throw err;
    });
  })
}

module.exports = {
  retweet,
  cancelRetweet
};
