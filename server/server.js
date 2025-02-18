import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv()

const app = express()
const port = process.env.PORT_NUMBER

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
