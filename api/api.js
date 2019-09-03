/* eslint-disable no-console */
const express = require('express')
const mongodb = require('mongodb')
const cors = require('cors')
const { check, validationResult } = require('express-validator')
const fetch = require('node-fetch')

const server = express()

server.use(cors())

server.get('/encounters', [
  check('dateStart', 'dateEnd').optional().isISO8601()
], async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const token = getToken(req, res)
  const dbUser = await authorizeUserId(res, token)

  const encounters = await getCollection('gw2.encounters')
  const filter = { 'players': dbUser.cogs.GuildWars2.key.account_name }

  if (req.query.success && (req.query.DateStart && req.query.dateEnd)) {
    filter.success = true
    filter.date = { '$gte': new Date(req.query.dateStart), '$lte': new Date(req.query.dateEnd) }
  }

  if (req.query.dateStart && req.query.dateEnd) {
    filter.date = { '$gte': new Date(req.query.dateStart), '$lte': new Date(req.query.dateEnd) }
  }

  if (req.query.dateStart && !req.query.dateEnd) {
    filter.date = { '$gte': new Date(req.query.dateStart) }
  }

  if (req.query.dateEnd && !req.query.dateStart) {
    filter.date = { '$lte': new Date(req.query.dateEnd) }
  }

  if (req.query.success) {
    filter.success = true
  }

  res.send(await encounters.find(filter).toArray())
})

server.get('/user', async (req, res) => {
  const token = getToken(req, res)
  res.send(await authorizeUserId(res, token))
})

function getToken (req, res) {
  const token = req.header('Authorization')

  if (!token) {
    res.status(401).json({ 401: 'Unauthorized' })
    return false
  }

  return token
}

async function fetchDiscordUser (token) {
  const user = await fetch('https://discordapp.com/api/users/@me', {
    headers: {
      authorization: `${token[0]} ${token[1]}`
    }
  })
    .then(res => res.json())
    .then((user) => { return user })

  return user
}

async function fetchDbUser (user) {
  const users = await getCollection('users')
  return users.findOne({ '_id': parseInt(user.id) })
}

async function authorizeUserId (res, token) {
  const splitToken = token.split(' ')
  const user = await fetchDiscordUser(splitToken)
  const dbUser = await fetchDbUser(user)

  if (parseInt(user.id) !== parseInt(dbUser._id)) {
    res.status(401).json({ 401: 'Unauthorized' })
    return false
  }

  return dbUser
}

async function getCollection (collection) {
  const client = await mongodb.MongoClient.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )

  return client.db(process.env.MONGO_DB || 'local').collection(collection)
};

export default {
  path: '/api',
  handler: server
}
