type Reserve = {
    (from: Date, to: Date, destination: string): void
    (from: Date, destination: string): void
}

let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        console.log("move to book hotel page")
    } else if (typeof toOrDestination === 'string') {
        console.log("move to return traffic ticket")
    }
}

reserve(new Date(2020, 9,26), new Date(2020, 9, 29), "Kyoto")
reserve(new Date(2020, 9,26), "Kyoto")
