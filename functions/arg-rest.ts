(() => {

    const fullName = (firstName: string, ...restArg: string[]): string => {
        return `${firstName} ${restArg.join(' ')}`;
    }

    const name = fullName("kervis", "vasquez", "antonio");
})()