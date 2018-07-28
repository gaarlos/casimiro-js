require('./utils/prototypes')

const { isMessage, replyTo, randomAnswer } = require('./utils/index.js')
const { messages, responses } = require('./database/index.js')
const TelegramBot = require('telegraf')

const TOKEN = process.env.TOKEN || 'TOKEN'
const bot = new TelegramBot(TOKEN)

bot.hears(isMessage(messages.saludos), replyTo(randomAnswer(responses.saludos)))

bot.catch(error => {
  console.log('Ooops, something went wrong: ', error)
})

bot.startPolling()
