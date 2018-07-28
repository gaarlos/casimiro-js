const { replyTo, randomAnswer } = require('../utils/index.js')
const { responses } = require('../database/index.js')
const { rInsultos } = responses

module.exports = async (ctx, next) => {
  replyTo(randomAnswer(rInsultos))(ctx)
  await next()
  ctx.reply('Anormal')
}
