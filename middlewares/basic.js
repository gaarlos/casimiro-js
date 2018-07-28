const moment = require('moment')

const printMessageInConsole = async ({ message, from }, next) => {
  await next()
  const now = moment().format('HH:mm:ss')
  console.log(`[ ${from.id} - ${now} ]: ${message.text}`)
}

const printErrorInConsole = error => {
  console.log('Ooops, something went wrong: ', error)
}

module.exports = {
  printMessageInConsole,
  printErrorInConsole
}
