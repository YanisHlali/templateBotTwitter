const bot = require("../twit");
const fs = require("fs");

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update
async function createTweet(text) {
  bot.post("statuses/update", { status: text }, (err, result) => {
    if (err) throw err;
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-show-id
async function getTweet(tweetId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/show", { id: tweetId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-destroy-id
async function deleteTweet(tweetId) {
  bot.post("statuses/destroy", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-search
async function searchTweet(query) {
  return new Promise((resolve, reject) => {
    bot.get("search/tweets", { q: query }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-oembed
async function getTweetOembed(tweetId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/oembed", { id: tweetId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-home_timeline
async function getTimeline() {
  return new Promise((resolve, reject) => {
    bot.get("statuses/home_timeline", (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-mentions_timeline
async function getMentions() {
  return new Promise((resolve, reject) => {
    twit.get("statuses/mentions_timeline", (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/timelines/api-reference/get-statuses-user_timeline
async function getUserTweet(userId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/user_timeline", { id: userId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/media/upload-media/api-reference/post-media-upload
async function tweetWithMedia(text,pathImage) {
  const image = fs.readFileSync(pathImage);
  const base64image = Buffer.from(image).toString("base64");

  bot.post("media/upload", { media: base64image }, (err, media, result) => {
    if (err) throw err;
    else {
      const status = {
        status: text,
        media_ids: media.media_id_string,
      };
      bot.post("statuses/update", status, (err,media,result) => {
        if (err) throw err;
      });
    }
  });
}

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/filter-realtime/api-reference/post-statuses-filter
async function filter() {
  return new Promise((resolve,reject) => {
    bot.post('statuses/filter', (err,result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

module.exports = {
  createTweet,
  getTweet,
  deleteTweet,
  searchTweet,
  getTweetOembed,
  getTimeline,
  getMentions,
  getUserTweet,
  tweetWithMedia,
  filter
};
