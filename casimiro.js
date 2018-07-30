// Prototypes modifiers
require('./utils/prototypes')

// Own resources
const { isMessage } = require('./utils/index.js')
const { messages } = require('./database/index.js')
const {
  printMessageInConsole,
  printErrorInConsole,
  greetings,
  insults,
  firebase
} = require('./middlewares')

// Libs
const TelegramBot = require('telegraf')

const { mSaludos, mInsultos } = messages

const TOKEN = process.env.TOKEN || 'TOKEN'
const bot = new TelegramBot(TOKEN)

bot.use(printMessageInConsole)
bot.use(firebase.middleware)

bot.hears(isMessage(mSaludos), greetings)
bot.hears(isMessage(mInsultos), insults)

bot.catch(printErrorInConsole)
bot.startPolling()
