"use strict";
(() => {
    // El never significa que la función no debe terminar exitosamente
    const abc = (mesage) => {
        if (false)
            throw new Error(mesage);
        return 1;
    };
    abc('khé');
})();
