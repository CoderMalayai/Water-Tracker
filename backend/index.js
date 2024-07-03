const express = require('express')
const app = express()
const port = 3000
const {User} = require("./models")
const { json } = require('sequelize')

app.use(express.json())

app.get('/api/user', async(req, res) => {
  const user = await User.findByPk(1)
  // const user = await User.findAll()
  return res.json(user)
})

app.post('/api/user', async(req, res) => {
  const data = req.body
  const result = await User.update(
    { cups: data.cups }, 
    { where: {
      id: 1
    }}
  )
  console.log("result", result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// login - user info
// sign up
// game
// some sort of tracker
// water intake