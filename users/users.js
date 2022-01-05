const { resolve } = require("path/posix");
const bot = require("../twit");


async function getSettings() {
    return new Promise((resolve,reject) => {
        bot.get('account/settings', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function verifyCredentials() {
    return new Promise((resolve,reject) => {
        bot.get('account/verify_credentials', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function getBanner(userId) {
    return new Promise((resolve,reject) => {
        bot.get('users/profile_banner', { user_id: userId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function deleteBanner() {
    bot.post('account/remove_profile_banner', (err,result) => {
        if (err) throw err;
    });
};

async function updateSettings() {
    bot.post('account/settings', (err,result) => {
        if (err) throw err;
    });
};

async function updateProfile(name) {
    
}

module.exports = {
    getSettings,
    verifyCredentials,
    getBanner,
    deleteBanner,
    updateSettings
}