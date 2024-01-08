"use strict";
(() => {
    const a = 1;
    let b;
})();
(() => {
    function returnName(name, age, upper = false) {
        return '';
    }
    const returnName2 = () => {
        return '';
    };
})();
(() => {
    function returnName(name, age) {
        return '';
    }
    const returnName2 = () => {
        return '';
    };
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    fullName('Aea', 'a', 'v', 'b', 'd', 'e');
})();
(() => {
    const addNumbers = (a, b) => a + b;
    let myFunction;
    myFunction = addNumbers;
})();
(() => {
    function returnName() {
        return '';
    }
    const returnName2 = () => {
        return '';
    };
})();
(() => {
    let flash = {
        name: '',
        powers: [],
    };
})();
(() => {
    let avenger;
    avenger = 'Ironman';
    console.log(avenger.charAt(0));
    avenger = 150.3434343;
    console.log(avenger.toFixed());
})();
(() => {
    const number = [1, 2, 3, 3, 4, 4, 5, 5, 5, 0, '5'];
    number.push(9);
    const number2 = [1, 2, 3, 3, 4, 4, 5, 5, 5, 0, '5'];
    number2.push(3);
})();
(() => {
    let isHero = false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    let currentAudio = AudioLevel.medium;
})();
(() => {
    const abc = (mesage) => {
        if (false)
            throw new Error(mesage);
        return 1;
    };
    abc('khé');
})();
(() => {
    let isActive = undefined;
})();
(() => {
    let heroes = 12;
    const villians = 20;
    heroes = Number('5AA');
})();
(() => {
    var _a;
    let batman = '';
    batman.toUpperCase();
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[0] = 'Ironman';
    hero[1] = 50;
})();
//# sourceMappingURL=main.js.map