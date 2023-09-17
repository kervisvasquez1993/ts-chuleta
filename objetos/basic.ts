(() => {
    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: "kervis",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
        getName() {
            return this.name
        }

    }

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: "kervis",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"],
        getName() {
            return this.name
        }

    }


})()