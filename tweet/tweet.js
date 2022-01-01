const bot = require("../twit");
const fs = require("fs");
const path = require("path");

async function tweet(text) {
  bot.post("statuses/update", { status: text }, (err, result) => {
    if (err) throw err;
  });
}

async function getTweet(tweetId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/show", { id: tweetId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function deleteTweet(tweetId) {
  bot.post("statuses/destroy", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
}

async function searchTweet(text) {
  return new Promise((resolve, reject) => {
    bot.get("search/tweets", { q: text }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function getTweetOembed(tweetId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/oembed", { id: tweetId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function likeTweet(tweetId) {
  bot.post("favorites/create", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
}

async function cancelLikeTweet(tweetId) {
  bot.post("favorites/destroy", { id: tweetId }, (err, result) => {
    if (err) throw err;
  });
}

async function getLikeTweet(userId) {
  return new Promise((resolve, reject) => {
    bot.get("favorites/list", { user_id: userId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function getTweet() {
  return new Promise((resolve, reject) => {
    bot.get("statuses/home_timeline", (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function getMentions() {
  return new Promise((resolve, reject) => {
    twit.get("statuses/mentions_timeline", (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

async function getUserTweet(userId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/user_timeline", { id: userId }, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
}

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

module.exports = {
  tweet,
  getTweet,
  deleteTweet,
  searchTweet,
  getTweetOembed,
  likeTweet,
  cancelLikeTweet,
  getLikeTweet,
  getTweet,
  getMentions,
  getUserTweet,
  tweetWithMedia,
  sample
};
