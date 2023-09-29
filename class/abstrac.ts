(() => {
    abstract class Mutante {
        constructor(public name: string,
            public realName: string) {


        }
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo salvado'
        }
    }
    class Villano extends Mutante {
        conquistarAlMundo(){
            return 'Mundo conquistado'
        }

    }
    const wolverine:Mutante = new Xmen('wolverin', 'logan')
    const magneto : Villano = new Villano('magneto', 'magnus')

    const printName = (character : Mutante) => {
        console.log(character.realName)
    }

    printName(magneto)
})()