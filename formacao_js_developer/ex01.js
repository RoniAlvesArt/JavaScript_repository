const precoCombustivel = 5.7;
const kmPorLt = 10;
const distanciaKm = 100;

const litros = distanciaKm / kmPorLt;
const gasto = litros*precoCombustivel;

print(gasto);