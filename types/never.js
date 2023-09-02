"use strict";
(() => {
    const error = (messages) => {
        throw new Error(messages);
    };
    error("Auxilio");
    console.log("hola");
})();
