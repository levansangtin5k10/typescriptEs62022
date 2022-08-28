let displayColorsSpread = function (message,...colors: string[]) {

   for (let i in colors) {

      console.log(colors[i]);

   }

}

let message = "Hello";

let colors = ['Red', 'Green', 'Blue']

displayColorsSpread(message,...colors);
