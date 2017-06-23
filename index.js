'use strict'

const http = require('http')
const env = process.env
const port = env.PORT || 3000

// Create the HTTP server, dumping the environment on each request
const server = http.createServer((req, res) => {
  res.end(dumpEnv())
})

// Format the environment variables
const dumpEnv = () => {
  let d = `<pre style="font-size: 1.5rem;">`
  for (let p in env) {
    d += `${p} = ${env[p]}\n`
  }
  d += `</pre>`
  return d
}
// Listen on port 
server.listen(port)
