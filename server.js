
const bot = require("twit");
const tweet = require("./tweet/tweet");
const retweet = require("./retweet/retweet");
const messages = require("./messages/messages");
const profile = require("./users/users");
const users = require("./users/users");
const followers = require("./followers/followers");
const friends = require("./friends/friends");
const friendships = require("./friendships/friendships");

friendships.createFriends('1350478031073251332')






// fonctions qui marchent pas

// profile.updateBanner('./images/unknow.jpg');

// profile.savedSeached()
// .then((result) => {
//     console.log(result)
// })

console.log("Starting the twitter bot ...");
