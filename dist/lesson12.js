"use strict";
let displayColorSpread = function (message, ...colors) {
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let messageSpread = "Hello";
let colors = ['red', 'green', 'blue'];
displayColorSpread(messageSpread, ...colors);
//# sourceMappingURL=lesson12.js.map