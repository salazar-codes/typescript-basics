"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    fullName('Aea', 'a', 'v', 'b', 'd', 'e');
})();
//# sourceMappingURL=args-rest.js.map