import axios from 'axios'

//On track-server 'npm run dev'
//On tracks 'ngrok http 3000'
//Change URL every 8 hours

export default axios.create({
    baseURL: 'http://d3ca4e9c.ngrok.io'
})