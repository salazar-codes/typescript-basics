"use strict";
// Evitar usar el any al programar
(() => {
    const number = [1, 2, 3, 3, 4, 4, 5, 5, 5, 0, '5'];
    // number.push(true); // error
    number.push(9); // error
    const number2 = [1, 2, 3, 3, 4, 4, 5, 5, 5, 0, '5'];
    number2.push(3);
    // number2.forEach( v => console.log( v.toUpperCase() ) )
})();
