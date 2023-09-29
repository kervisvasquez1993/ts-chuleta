"use strict";
(() => {
    class Avenger {
    
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgEge = 35;
    const antman = new Avenger("nombre", "avenger");
})();
