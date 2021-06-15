// Require the `restricted` middleware from `auth-middleware.js`. You will need it here!
const { restricted } = require('../auth/auth-middleware')
const Models = require('./users-model')
const router = require('express').Router()
/**
  [GET] /api/users

  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  response:
  status 200
  [
    {
      "user_id": 1,
      "username": "bob"
    },
    // etc
  ]

  response on non-authenticated:
  status 401
  {
    "message": "You shall not pass!"
  }
 */
  router.get('/api/users', restricted, (req, res, next) => {
    console.log('USERS ROUTER')
    Models.find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(next)
  })

// Don't forget to add the router to the `exports` object so it can be required in other modules
module.exports = router