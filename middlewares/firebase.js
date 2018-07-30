const fb = require('firebase')
require('firebase/firestore')

const API_KEY = process.env.FIREBASE_KEY
const PROJECT_ID = process.env.FIREBASE_PROJECT

const config = {
  apiKey: API_KEY,
  projectId: PROJECT_ID,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`
}
const firestoreSettings = {
  timestampsInSnapshots: true
}

fb.initializeApp(config)

var firebase = {}

firebase.database = fb.firestore()
firebase.database.settings(firestoreSettings)

firebase.logMessage = message => {
  let groupId = message.chat.id
  let groupName = message.chat.title
  let groupUsername = message.chat.username
  let groupType = message.chat.type

  let groupRef = firebase.database.doc(`groups/${groupId}`)

  groupRef.once('value').then(snapshot => {
    if (!snapshot.val()) {
      groupRef.set({
        id: groupId,
        name: groupName,
        type: groupType,
        username: groupUsername || null
      })
    }
  })

  let chatRef = firebase.database.doc(
    `groups/chat/${groupId}/${message.message_id}`
  )

  chatRef.set(message)
}

firebase.middleware = (ctx, next) => {
  let message = ctx.message
  let database = firebase.database

  const userRef = database.doc(`private/${ctx.from.id}`)

  if (!(message.chat.type === 'group' || message.chat.type === 'supergroup')) {
    console.log('LOGGER: Private chat')

    userRef.get().then(doc => {
      if (doc.exists) {
        console.log(`Al habla ${doc.data().from.first_name}`)

        return
      }

      console.log(`No conozco a ${message.from.first_name}, me lo apunto`)
      userRef.set(message)
      ctx.reply(
        `No te conozco, ${message.from.first_name}, espera que me lo apunto`
      )
    })

    return next()
  }

  if (ctx.updateType !== 'message') {
    return next()
  }

  firebase.logMessage(message)

  return next()
}

module.exports = firebase
