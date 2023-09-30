(() => {
    interface Address {
        id: number,
        zip: string,
        city: string
    }

    interface Client {
        name: string,
        age?: number,
        address?: Address
    }
    const client: Client = {
        name: 'fernando',
        age: 25,
        address: {
            id: 124,
            zip: 'el saman',
            city: 'guacara'
        }
    }
})()