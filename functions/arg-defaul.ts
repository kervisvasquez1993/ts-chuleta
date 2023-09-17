(() => {
    const fullName = (firstName: string, lastName?: (string | boolean), upper: boolean = true): string => {
        return `${firstName} ${lastName || ",no lastName"}`;
    }

    const name = fullName("kervis");
    console.log(name);
})()