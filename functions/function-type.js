"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hello ${name}`;
    const saveTheWorld = () => "el mundo esta sarvado.";
    // let myFuntion: Function
    // let myFuntion: (y:number) => number
    // let myFuntion: (y: string) => string
    let myFuntion;
    //! myFuntion = 10
    //! console.log(myFuntion)
    myFuntion = addNumbers;
    console.log(myFuntion(2, 4));
    myFuntion = greet;
    console.log(myFuntion("maria"));
    myFuntion = saveTheWorld;
    console.log(myFuntion());
})();
