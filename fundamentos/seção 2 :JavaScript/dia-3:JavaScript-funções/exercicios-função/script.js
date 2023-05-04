let saldo = 100;
function adicionaSaldo(valor) {
    return valor + saldo;
}
function subtraiSaldo(valor){
    return saldo - valor
}
function multiplicaSaldo(valor){
    return valor * saldo
}
function divideSaldo(valor){
    return valor / saldo
}

console.log(adicionaSaldo(300));
console.log(subtraiSaldo(20));
console.log(multiplicaSaldo(300));
console.log(divideSaldo(300));