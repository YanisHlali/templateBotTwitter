const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-ids
async function getFriends() {
    return new Promise((resolve,reject) => {
        bot.get('friends/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friends-list
async function getFriendsList() {
    return new Promise((resolve,reject) => {
        bot.get('friends/list', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

module.exports = {
    getFriends,
    getFriendsList
}