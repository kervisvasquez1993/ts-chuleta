(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log('llamando al constructor')
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }
    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName)
            console.log('constructor xmen llamado')
        }
        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 2) {
                throw new Error('el nonbre de be ser mayor a 3 caracteres')
            }
            this.name = name

        }
    }
    const wolverin = new Xmen('Wolvering', 'Logan', true)
    console.log(wolverin.fullName)
    wolverin.fullName = 'kervis vasquez'
})()