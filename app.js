//jshint esversion:6
const https = require("https");
const express = require("express");
const axios = require('axios');
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=a8d621d65839dee56a37de6c873fb4c8&units=metric');
     //const { temp, description} = response.data.main  ;
     const { description } = response.data.weather[0];
     const { temp } = response.data.main;
     const {icon} = response.data.weather[0];
     const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const currentDateTime = currentDate.toLocaleString();


    res.render("home", { temperature: temp, description, imageURL ,currentTime, currentDateTime});
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });







app.listen(3000, function() {
    console.log("Server started on port 3000");
  });