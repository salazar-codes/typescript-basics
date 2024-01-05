"use strict";
// Evitar usar el any al programar
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    fullName('Aea', 'a', 'v', 'b', 'd', 'e');
})();
