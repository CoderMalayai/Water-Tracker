const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// login - user info
// sign up
// game
// some sort of tracker
// water intake