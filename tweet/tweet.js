const bot = require("../twit");
const fs = require("fs");
const path = require("path");

async function createTweet(text) {
  bot.post("statuses/update", { status: text }, (err, result) => {
    if (err) throw err;
  });
}

async function replyTweet(idTweet,text) {
  bot.post("statuses/update", { in_reply_to_status_id: idTweet, status: text }, (err,result) => {
    if (err) throw err;
  });
};

async function getTweet(tweetId) {
  return new Promise((resolve, reject) => {
    bot.get("statuses/show/"+tweetId, { id: tweetId }, (err, result) => {
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

async function statusesFilter() {
  return new Promise((resolve,reject) => {
    bot.post('statuses/filter', (err,result) => {
      if (err) throw err;
      resolve(result);
    });
  });
};

function test() {

  function pressStart(tweet) {
      var id = tweet.id_str;
      var text = tweet.text;
      var name = tweet.user.screen_name;
    
      if (text.endsWith("quoi") == true) {
    
        // Start a reply back to the sender
        var replyText = `@${name} feur`
        // console.log(text)
        // Post that tweet
        bot.post('statuses/update', { status: replyText, in_reply_to_status_id: id }, gameOver);
    
      }
    
      function gameOver(err, reply) {
        if (err) {
          console.log(err.message);
          console.log("Game Over");
        } else {
          console.log('Tweeted: ' + reply.text);
        }
      };
    }
  
  let stream = bot.stream('statuses/filter', { track: "quoi" });
  stream.on('tweet', pressStart);
  
  }

module.exports = {
  createTweet,
  replyTweet,
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
  test
};
