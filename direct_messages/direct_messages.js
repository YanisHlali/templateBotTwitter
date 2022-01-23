const bot = require("../twit");

// https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/new-event
async function createMessage(idUser,text) {
    let message = {
        "event": {
            "type": "message_create",
            "message_create": {
                "target": {
                    "recipient_id": idUser
                },
                "message_data": {
                    "text": text
                }
            }
        }
    }
    bot.post('direct_messages/events/new', message, (err,result) => {
        if (err) throw err;
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/get-event
async function getMessage(idMessage) {
    return new Promise((resolve,reject) => {
        bot.get('direct_messages/events/show', { id: idMessage }, (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/list-events
async function getMessagesList() {
    return new Promise((resolve,reject) => {
        bot.get('direct_messages/events/list', (err,result) => {
            if (err) throw err;
            resolve(result);
        });
    });
};

// https://developer.twitter.com/en/docs/twitter-api/v1/direct-messages/sending-and-receiving/api-reference/delete-message-event
async function deleteMessage(idMessage) {
    bot.delete('direct_messages/events/destroy', { id: idMessage }, (err,result) => {
        if (err) throw err;
    });
};



module.exports = {
    createMessage,
    getMessage,
    getMessagesList,
    deleteMessage
}