"use strict";
(() => {
    const fullName = (firstName, ...restArg) => {
        return `${firstName} ${restArg.join(' ')}`;
    };
    const name = fullName("kervis", "vasquez", "antonio");
})();
