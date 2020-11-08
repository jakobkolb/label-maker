import express, { Application } from 'express'

export const createApp = (): Application => {
    const app = express()
    app.post('/', (req, res) => {
        res.send('Hello world')
    })
    return app
}
