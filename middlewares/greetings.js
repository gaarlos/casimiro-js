const { replyTo, randomAnswer } = require('../utils/index.js')
const { responses } = require('../database/index.js')
const { rSaludos } = responses

module.exports = ctx => {
  replyTo(randomAnswer(rSaludos))(ctx)
}
