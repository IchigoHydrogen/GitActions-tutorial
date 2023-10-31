const express = require('express')
const app = express()
const serverlessExpress = require('@vendia/serverless-express')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


exports.handler = serverlessExpress({ app })
