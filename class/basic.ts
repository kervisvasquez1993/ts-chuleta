(() => {
    class Avenger {
        private name: string;
        private team: string;
        public realName?: string;
        static avgEge: number = 35
        static getAvgAge (){
            return this.name // con esta forma puedo acceder al nombre de la clase 
        }
        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        public bio() {
            return `${this.name} ${this.team}`
        }

        
    }

    const antman: Avenger = new Avenger("nombre", "avenger")
    console.log(antman.bio())
    

})()