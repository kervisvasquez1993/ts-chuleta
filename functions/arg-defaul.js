"use strict";
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        return `${firstName} ${lastName || ",no lastName"}`;
    };
    const name = fullName("kervis");
    console.log(name);
})();
