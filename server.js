
const bot = require("twit");
const account = require("./account/account");
const blocks = require("./blocks/blocks");
const collections = require("./collections/collections");
const direct_messages = require("./direct_messages/direct_messages");
const followers = require("./followers/followers");
const friends = require("./friends/friends");
const friendships = require("./friendships/friendships");
const mutes = require("./mutes/mutes");
const retweet = require("./retweet/retweet");


// SAVED SEARCHES
// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-saved_searches-list
// async function savedSeached() {
//     return new Promise((resolve,reject) => {
//         bot.get('saved_searches/list', (err,result) => {
//             if (err) throw err;
//             resolve(result);
//         });
//     });
// };

//





































// fonctions qui marchent pas

// profile.updateBanner('./images/unknow.jpg');
// .then((result) => {
//     console.log(result)
// })

// profile.savedSeached()
// .then((result) => {
//     console.log(result)
// })


console.log("Starting the twitter bot ...");
