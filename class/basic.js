"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name; // con esta forma puedo acceder al nombre de la clase 
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgEge = 35;
    const antman = new Avenger("nombre", "avenger");
    console.log(antman.bio());
})();
