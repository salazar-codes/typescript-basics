"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    // Después de los ":" se agrega la firma de la función.
    let myFunction;
    myFunction = addNumbers; //La función pasa por referencia
})();
