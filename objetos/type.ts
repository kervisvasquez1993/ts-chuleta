(() => {

    type Hero = {
        name: string;
        age: number;
        powers: string[];
        getName?: () => string;
    }
    let flash: Hero = {
        name: "kervis",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
        getName() {
            return this.name
        }

    }

    let superman: Hero = {
        name: "kervis",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
        getName() {
            return this.name
        }

    }


})()