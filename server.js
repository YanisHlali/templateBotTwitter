const tweet = require("./tweet/tweet");
const retweet = require("./retweet/retweet");
const messages = require("./messages/messages");

tweet.searchTweet('quoi')
.then((result) => {
    console.log(result);
})

console.log("Starting the twitter bot ...");
