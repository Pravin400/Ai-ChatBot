require('dotenv').config();


const express = require('express');
const app = express();
const port = 3000;

const { GoogleGenerativeAI } = require("@google/generative-ai");

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});

app.use(express.json());

app.get('/', async (req, res) => {

    const question = req.body.question;

    console.log(question);

    const chat = model.startChat({
        history: [],
    });
    const result = await chat.sendMessage(question);
    const response = await result.response;
    const text = await response.text();

    // send the response returned by the model as API response

    res.send({Response: text});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})