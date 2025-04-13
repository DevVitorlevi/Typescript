type Vehicle = {
    name: string,
    speed: number
}
const verifyTrafficFine = (vehicle: Vehicle) => {
    const speedLimit = 80
    if (vehicle.speed <= speedLimit) {
        return `O ${vehicle.name} está a uma velocidade de ${vehicle.speed}KM/H dentro do limite. Boa Viagem`
    }
    else if (vehicle.speed > speedLimit) {
        return `O ${vehicle.name} está a uma velocidade de ${vehicle.speed}KM/H e foi multado.`
    }
}

const Car: Vehicle = {
    name: 'Celta',
    speed: 80
}

console.log(verifyTrafficFine(Car))