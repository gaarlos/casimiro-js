/**
 * @param {Array} toCompare Array of strings
 * @param {Object} msg Telegram Message
 */
const isMessage = toCompare => msg => {
  const incomeMsg = msg.formatToCompare()
  return toCompare.messages.some(el => el === incomeMsg)
}

/**
 * @param {String} msg
 * @param {Function} reply
 * @param {Object} message
 */
const replyTo = msg => ({ reply, message }) =>
  reply(msg, { reply_to_message_id: message.message_id })

/**
 * @param {String} str
 */
const bold = str => `<b>${str}</b>`

/**
 * @param {String} str
 */
const italic = str => `<i>${str}</i>`

module.exports = {
  isMessage,
  replyTo,
  bold,
  italic
}
