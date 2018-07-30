const basic = require('./basic')
const insults = require('./insults')
const greetings = require('./greetings')
const firebase = require('./firebase')

module.exports = {
  ...basic,
  insults,
  greetings,
  firebase
}
