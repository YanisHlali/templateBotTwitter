const bot = require("../twit");
const fs = require("fs");

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-settings
async function getSettings() {
    return new Promise((resolve,reject) => {
        bot.get('account/settings', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-settings
async function updateSettings() {
    bot.post('account/settings', { lang: 'fr' }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/get-account-verify_credentials
async function verifyCredentials() {
    return new Promise((resolve,reject) => {
        bot.get('account/verify_credentials', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_banner
async function updateBanner(pathImage) {
    const image = fs.readFileSync(pathImage);
    const base64image = Buffer.from(image).toString("base64");
    bot.post('account/update_profile_banner', { banner: base64image }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-remove_profile_banner
async function deleteBanner() {
    bot.post('account/remove_profile_banner', (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile
async function updateProfile() {
    bot.post('account/update_profile', (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/manage-account-settings/api-reference/post-account-update_profile_image
async function updateProfileImage(pathImage) {
    const image = fs.readFileSync(pathImage);
    const base64image = Buffer.from(image).toString("base64");
    bot.post('account/update_profile_image', { image: base64image }, (err,result) => {
        if (err) throw err;
    });
};

module.exports = {
    getSettings,
    updateSettings,
    verifyCredentials,
    updateBanner,
    deleteBanner,
    updateProfile,
    updateProfileImage
}