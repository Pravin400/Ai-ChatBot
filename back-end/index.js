require('dotenv').config();


const express = require('express');
const app = express();
const port = 3000;

const { GoogleGenerativeAI } = require("@google/generative-ai");

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({model:"gemini-1.5-flash"});

app.get('/', async (req, res) => {

    const chat = model.startChat({
        history: [],
    });
    const result = await chat.sendMessage("i want to learn the full concept of the front end and backend give mi all start to end learning path with and explanation how i done this   ??");
    const response = await result.response;
    const text = response.text();

    // send the response returned by the model as API response

    res.send({test: text});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})