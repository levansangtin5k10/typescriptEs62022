"use strict";
let displayColorsSpread = function (message, ...colors) {
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "Hello";
let colors = ['Red', 'Green', 'Blue'];
displayColorsSpread(message, ...colors);
//# sourceMappingURL=lesson12.js.map