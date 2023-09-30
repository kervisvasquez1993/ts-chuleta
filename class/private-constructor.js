"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis... el unico');
            }
            return Apocalipsis.instance;
        }
    }
    // const apocalipsis = new Apocalipsis('soy apocalipsis.... el unico')
})();
