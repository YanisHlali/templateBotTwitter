const bot = require("../twit");

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

// async function 

module.exports = {
    getBlocks,
    getBlocksList
}