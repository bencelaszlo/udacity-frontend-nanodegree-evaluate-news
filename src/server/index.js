const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');

// Import and parse dotenv configuration
const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
// Set aylien API credentials
const nlpApi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// Set port
const PORT = 8080
    
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`)
})

app.post('/analyze/', async (req, res) => {
    nlpApi.sentiment({ url: req.body.url, mode: 'document' }, (error, result, remaining) => {
        if (error) {
            console.error(JSON.stringify(error))
            res.status(500).send()
        }

        res.status(200).send(result)
    })
})
