import * as express from 'express'
import * as bodyParser from 'body-parser'
import { routes } from './routes'

const app: express.Application = express()
const port: number = Number(process.env.PORT) || 8008

app.use(bodyParser.json())
app.use('/', routes(express.Router()))

const server = app.listen(port, () => {
  console.info(`API listening at http://localhost:${port}`)
})

export default server
