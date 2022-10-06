const axios = require("axios").default


async function sendException(botId, chatId, message, exception) {
    let text = `${message}`
    if (typeof (exception) === 'object' && exception.stack) {
        text = `${text}\n${exception.stack}`
    }
    if (process.env.RUNTIME_ENV) {
        text = `${process.env.RUNTIME_ENV} - ${text}`
    }
    await sendMessage(botId, chatId, text)
}

async function sendMessage(botId, chatId, message) {
    try {
        await axios.post(`https://api.telegram.org/bot${botId}/sendMessage`, { chat_id: chatId, text: message })
    } catch (ex) {
        console.error(`Error enviando log a telegram`)
        console.log(ex)
    }
}

module.exports = { sendMessage, sendException };
