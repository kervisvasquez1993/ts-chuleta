(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = "Fernando"

    myCustomVariable = 20

    myCustomVariable = {
        name: "kervis vasquez",
        age: 30,
        powers: ["ninguno"]
    }



})()