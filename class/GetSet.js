"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('llamando al constructor');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('constructor xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 2) {
                throw new Error('el nonbre de be ser mayor a 3 caracteres');
            }
            this.name = name;
        }
    }
    const wolverin = new Xmen('Wolvering', 'Logan', true);
    console.log(wolverin.fullName);
    wolverin.fullName = 'kervis vasquez';
})();
