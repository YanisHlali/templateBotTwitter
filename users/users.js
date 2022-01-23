const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-users-profile_banner
async function getBanner(userId) {
    return new Promise((resolve,reject) => {
        bot.get('users/profile_banner', { user_id: userId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-users-report_spam
async function reportSpam(userId) {
    bot.post('users/report_spam', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-show
async function searchUsers(query) {
    return new Promise((resolve,reject) => {
        bot.get('users/search', { q: query }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

module.exports = {
    getBanner,
    reportSpam,
    searchUsers
}