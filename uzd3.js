const displayCount = document.getElementById('count');


const skaiciuokle = () => {
    let monetos = 0;
    displayCount.innerHTML = 'Turite 0 monetu';
    while(true){
        const answer = prompt('Ar noretumet monetos?');
        if(answer.toLowerCase() == 'taip') {
            monetos++;
            displayCount.innerHTML = `Turite ${monetos} moneta/as.`;
        }
        else break;
    }
    alert('Iki!');
}

skaiciuokle();