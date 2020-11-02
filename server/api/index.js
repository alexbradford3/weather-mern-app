// Use express's router to route all our API endpoints
import express from "express"
import Weather from "./weather"
const router = express.Router();

// GET Request - statically get the weather data from the weather api
router.get("/weather",  async (req, res) => {
    let weather = new Weather();
    
    // Fixing the params of zipcode and tempMetric for an example GET request
    let weatherData = await weather.getWeatherData(02127, "us");

    // Content that will be sent will be a prettified json
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

// POST Request - dynamically get the weather data based on request body
router.post("/weather",  async (req, res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();
    
    // The params for zipCode and tempMetric are dynamic
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = router;