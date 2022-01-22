const { createTweet } = require("../tweet/tweet");
const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-incoming
async function getRequest() {
    return new Promise((resolve,reject) => {
        bot.get('friendships/incoming', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-lookup
async function getLook(userId) {
    return new Promise((resolve,reject) => {
        bot.get('friendships/lookup', { user_id: userId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-no_retweets-ids
async function getFriendsNoRetweet() {
    return new Promise((resolve,reject) => {
        bot.get('friendships/no_retweets/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-update
async function updateRetweetFriends(userId) {
    bot.post('friendships/update', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-outgoing
async function getMyRequest() {
    return new Promise((resolve,reject) => {
        bot.get('friendships/outgoing', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-friendships-show
async function getRelations(userId,targetId) {
    return new Promise((resolve,reject) => {
        bot.get('friendships/show', { source_id: userId, target_id: targetId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-create
async function createFriends(userId) {
    bot.post('friendships/create', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/post-friendships-destroy
async function deleteFriends(userId) {
    bot.post('friendships/destroy', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

module.exports = {
    getRequest,
    getLook,
    getFriendsNoRetweet,
    updateRetweetFriends,
    getMyRequest,
    getRelations,
    createFriends,
    deleteFriends
}