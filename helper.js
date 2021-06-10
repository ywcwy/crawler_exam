#! /usr/bin/env node
const axios = require('axios')
const baseURL = `https://ats.api.alexa.com/api`
require('dotenv').config()
const fs = require('fs')
function getURL(count, country) {
  console.log(count, country)

  axios.get(baseURL, {
    params: { Action: 'TopSites', Count: count, CountryCode: country, ResponseGroup: 'Country', Output: 'json' },
    headers: { 'Accept': 'application/json', 'x-api-key': process.env.X_API_KEY }
  })
    .then(res => {
      const { Country } = res.data.Ats.Results.Result.Alexa.TopSites
      const data = [Country, Country.Sites]
      console.log(data)
      // fs.writeFile('getURL01.js', data, function (err) {
      //   if (err) {
      //     console.log('文件寫入失敗')
      //     console.log(err)
      //   } else {
      //     console.log('Write operation complete.')
      //   }
      // })
    })
    .catch(err => console.log(err))
}

module.exports = { getURL }