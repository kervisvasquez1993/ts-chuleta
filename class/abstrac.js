"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villano extends Mutante {
        conquistarAlMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('wolverin', 'logan');
    const magneto = new Villano('magneto', 'magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(magneto);
})();
