import * as dotenv from 'dotenv'
dotenv.config()


import app from './server'

app.listen(3000, () => {
    console.log('Server Started')
})