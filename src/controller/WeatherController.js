require("dotenv").config();

const axios = require("axios");

module.exports = {
  async index(req, res) {
    const city = req.query.q;

    const weather = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          units: "metric",
          appid: process.env.WEATHER_APPID,
          lang: "pt_br",
        },
      }
    );
    return res.json(weather.data);
  },
};
