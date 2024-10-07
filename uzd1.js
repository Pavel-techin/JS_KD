const suma = (skaiciu_tipas) => {
    let sum = 0;
    for(let i = 0; i < 100; i++){
        if(skaiciu_tipas.toLowerCase() === 'lyginiai' && i%2 != 0) sum += i + 1;
        else if(skaiciu_tipas.toLowerCase() === 'nelyginiai' && i%2 == 0) sum += i + 1;
    }
    return sum;
}

console.log(suma('lyginiai'));
console.log(suma('nelyginiai'));