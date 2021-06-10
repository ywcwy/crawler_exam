#! /usr/bin/env node
const yargs = require('yargs')
yargs.version('1.1.0')
const { getURL } = require('./helper')

// show top <number> sites URL
yargs.command({
  command: 'top',
  describe: "show top <number> sites URL",
  builder: {
    number: {
      describe: 'add number',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    console.log('!!!')
    getURL(argv.number, '*')
  }
}).parse()


// show top 20 sites URL of a country
yargs.command({
  command: 'country',
  describe: "show top 20 sites URL of a country",
  builder: {
    countryCode: {
      describe: 'add country code',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('@@@')
    getURL(20, argv.countryCode)
  }
}).parse()
