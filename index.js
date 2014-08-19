'use strict';

var _       = require('lodash');

var config  = require('./config');

_.merge(exports, config, true);


// Ticker merhods:
exports.ticker = require('./lib/ticker').ticker;


// // Common methods:
// exports.balance = require('./lib/balance').balance;


// // Trader methods:
// var trader = require('./lib/trader');
// exports.purchase = trader.purchase;
// exports.sell = trader.sell;


// // Wallet methods:
// exports.sendBitcoins = require('./lib/wallet').sendBitcoins;
