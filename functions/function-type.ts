(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string): string => `hello ${name}`;
    const saveTheWorld = () => "el mundo esta sarvado.";

    let myFuntion: Function
    // let myFuntion: (y:number) => number
    // let myFuntion: (y: string) => string
    // let myFuntion: () => string

    //! myFuntion = 10
    //! console.log(myFuntion)
    myFuntion = addNumbers
    console.log(myFuntion(2, 4))
    myFuntion = greet
    console.log(myFuntion("maria"))
    myFuntion = saveTheWorld
    console.log(myFuntion())

})()