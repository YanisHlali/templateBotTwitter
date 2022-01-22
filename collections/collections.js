const bot = require("../twit");

async function getCollections(collectionId) {
    return new Promise((resolve,reject) => {
        bot.get('collections/entries', { id: collectionId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function getCollectionsList(userName) {
    return new Promise((resolve,reject) => {
        bot.get('collections/list', { screen_name: userName }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function getCollectionsDetails(collectionId) {
    return new Promise((resolve,reject) => {
        bot.get('collections/show', { id: collectionId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

async function createCollections(name) {
    bot.post('collections/create', { name: name }, (err,result) => {
        if (err) throw err;
    });
};

async function updateCollections(collectionId,name) {
    bot.post('collections/update', { id: collectionId, name: name }, (err,result) => {
        if (err) throw err;
    });
};

async function deleteCollections(collectionId) {
    bot.post('collections/destroy', { id: collectionId }, (err,result) => {
        if (err) throw err;
    });
};

async function addColumnCollections(collectionId,tweetId) {
    bot.post('collections/entries/add', { id: collectionId, tweet_id: tweetId }, (err,result) => {
        if (err) throw err;
    });
};

async function moveColumnCollections(collectionId,tweetId,tweetIdRelative) {
    bot.post('collections/entries/move', { id: collectionId, tweet_id: tweetId, relative_to: tweetIdRelative}, (err,result) => {
        if (err) throw err;
    });
};

async function deleteColumnCollections(collectionId,tweetId) {
    bot.post('collections/entries/remove', { id: collectionId, tweet_id: tweetId }, (err,result) => {
        if (err) throw err;
    });
};

module.exports = {
    getCollections,
    getCollectionsList,
    getCollectionsDetails,
    createCollections,
    updateCollections,
    deleteCollections,
    addColumnCollections,
    moveColumnCollections,
    deleteColumnCollections
}