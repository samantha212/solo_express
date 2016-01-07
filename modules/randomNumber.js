/**
 * Created by samanthamusselman on 1/5/16.
 */

var randomNumber = function(min, max) {
    return num = Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = randomNumber;