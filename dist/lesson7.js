"use strict";
let isDone = false;
console.log(isDone);
let decimal = 6;
console.log(decimal);
let fullname = "Le Van Sang";
let age = 33;
let sentence = `
Hello , my name ${fullname} Age:${age + 1}
`;
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
let C = Color.blue;
console.log(C);
//# sourceMappingURL=lesson7.js.map