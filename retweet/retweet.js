const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-retweet-id
async function createRetweet(tweetId) {
  bot.post("statuses/retweet", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
}

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-unretweet-id
async function cancelRetweet(tweetId) {
  bot.post("statuses/unretweet", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
}

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweets-id
async function getRetweets(userId) {
  return new Promise((resolve,reject) => {
    bot.get('statuses/retweets', { id: userId }, (err,result) => {
      if (err) throw err;
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweets_of_me
async function getMyRetweets() {
  return new Promise((resolve,reject) => {
    bot.get('statuses/retweets_of_me', (err,result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-retweeters-ids
async function getRetweetsOf(tweetId) {
  return new Promise((resolve,reject) => {
    bot.get('statuses/retweeters/ids', { id: tweetId }, (err,result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

module.exports = {
  createRetweet,
  cancelRetweet,
  getRetweets,
  getMyRetweets,
  getRetweetsOf
};
