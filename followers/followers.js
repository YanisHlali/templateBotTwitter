const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-ids
async function getFollowers() {
    return new Promise((resolve,reject) => {
        bot.get('followers/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-followers-list
async function getFollowersList() {
    return new Promise((resolve,reject) => {
        bot.get('followers/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

module.exports = {
    getFollowers,
    getFollowersList
}