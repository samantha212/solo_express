/**
 * Created by samanthamusselman on 1/5/16.
 */

var random = require('./randomNumber');

var toUSD = require('./toUSD');

var kitty = function(){
    return toUSD(random(100, 1000000));
};

exports.randomDollar = kitty;
exports.text = 'Account balance: \n';
