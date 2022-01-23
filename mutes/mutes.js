const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-create
async function createMutes() {
    bot.post('mutes/users/create', (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-ids
async function getMutes() {
    return new Promise((resolve,reject) => {
        bot.get('mutes/users/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/get-mutes-users-list
async function getMutesList() {
    return new Promise((resolve,reject) => {
        bot.get('mutes/users/list', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-mutes-users-destroy
async function deleteMutes(userId) {
    bot.post('mutes/users/destroy', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

module.exports = {
    getMutes,
    getMutesList,
    createMutes,
    deleteMutes
}