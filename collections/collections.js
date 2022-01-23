const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-entries
async function getCollections(collectionId) {
    return new Promise((resolve,reject) => {
        bot.get('collections/entries', { id: collectionId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-list
async function getCollectionsList(userName) {
    return new Promise((resolve,reject) => {
        bot.get('collections/list', { screen_name: userName }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/get-collections-show
async function getCollectionsDetails(collectionId) {
    return new Promise((resolve,reject) => {
        bot.get('collections/show', { id: collectionId }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-create
async function createCollections(name) {
    bot.post('collections/create', { name: name }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-update
async function updateCollections(collectionId) {
    bot.post('collections/update', { id: collectionId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-destroy
async function deleteCollections(collectionId) {
    bot.post('collections/destroy', { id: collectionId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-add
async function addColumnCollections(collectionId,tweetId) {
    bot.post('collections/entries/add', { id: collectionId, tweet_id: tweetId }, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-move
async function moveColumnCollections(collectionId,tweetId,tweetIdRelative) {
    bot.post('collections/entries/move', { id: collectionId, tweet_id: tweetId, relative_to: tweetIdRelative}, (err,result) => {
        if (err) throw err;
    });
};
// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/curate-a-collection/api-reference/post-collections-entries-remove
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