(() => {
    class Apocalipsis {
        public name: string
        static instance: Apocalipsis
        private constructor(name: string) {
            this.name = name
        }
        static callApocalipsis():Apocalipsis{

            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis... el unico')
            }
            return Apocalipsis.instance
        }
    }
    // const apocalipsis = new Apocalipsis('soy apocalipsis.... el unico')
})()