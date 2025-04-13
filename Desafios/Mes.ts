function Inverter(value: number | boolean): number | boolean {
    if (typeof value === 'boolean') {
        return !value;
    } else if (typeof value === 'number') {
        return -value;
    }

    throw new Error('Tipo não suportado');
}
console.log(Inverter(1))
console.log(Inverter(-1))
console.log(Inverter(false))
console.log(Inverter(true))