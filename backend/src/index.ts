import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err)
    return res.status(500).send()
})

app.listen(port, () => console.log(`listening on port ${port}`))
