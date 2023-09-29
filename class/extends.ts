(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log('llamando al constructor')
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
        // private getFullName() {
        //     return `${this.name} ${this.realName}`
        // }


    }
    class Xmen extends Avenger{
        constructor(  name : string ,  realName : string, public isMutant : boolean){
            super(name, realName)
            console.log('constructor xmen llamado')
        }
        getFullNameDesdeXmen(){
            super.getFullName()
        }
    }
    const wolverin = new Xmen('Wolvering', 'Logan', true)
    console.log(wolverin.getFullNameDesdeXmen())
})()