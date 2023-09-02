(() => {
    const error = (messages: string): never => {
        throw new Error(messages)
    }
    error("Auxilio")
    console.log("hola")
})()