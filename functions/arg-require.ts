(() => {
    const fullName = (firstName: string, lastName: (string | boolean)): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName("kervis", "vasquez");
    console.log(name);
})()