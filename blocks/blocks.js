const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-create
async function createBlocks(userId) {
    bot.post('blocks/create', { user_id: userId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/get-blocks-ids
async function getBlocks() {
    return new Promise((resolve,reject) => {
        bot.get('blocks/ids', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/get-blocks-list
async function getBlocksList() {
    return new Promise((resolve,reject) => {
        bot.get('blocks/list', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/mute-block-report-users/api-reference/post-blocks-destroy
async function deleteBlocks(userId) {
    bot.post('blocks/destroy', { user_id: userId}, (err,result) => {
        if (err) throw err;
    });
};

module.exports = {
    createBlocks,
    getBlocks,
    getBlocksList,
    deleteBlocks
}