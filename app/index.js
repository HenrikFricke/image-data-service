const connect = require('connect')
const parameters = require('connect-params')
const http = require('http')

const getImageData = require('../lib/getImageData')
const header = require('../config/header')

const app = connect()
.use(parameters((params) => {
  return {
    url: params.url
  }
}))

.use((req, res, next) => {
  if (!req.params.url) next({status: 400, message: 'URL is missing.'})
  next()
})

.use((req, res, next) => {
  res.writeHead(200, header)
  next()
})

.use((req, res, next) => {
  res.statusCode = 200
  getImageData(req.params.url)
    .then((imageData) => res.end(JSON.stringify(imageData)))
    .catch((err) => next({status: 400, message: 'Something went wrong.'}))
})

.use((err, req, res, next) => {
  res.writeHead(err.status, header)
  res.end(JSON.stringify({
    Error: err.message
  }))
})

http.createServer(app).listen(process.env.PORT || 3000)
