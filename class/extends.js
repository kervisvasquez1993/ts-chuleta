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
        getFullNameDesdeXmen() {
            super.getFullName();
        }
    }
    const wolverin = new Xmen('Wolvering', 'Logan', true);
    console.log(wolverin.getFullNameDesdeXmen());
})();
