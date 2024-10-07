let names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella"];

const byeOlivia = () => names.shift();
const hiMason = () => names.unshift('Mason');
const Pavel = () => names.push('Pavel');
const removeName = name => names.forEach((element, index) => {if(element == name) names.splice(index, 1)});

let withBob = [];
const joinBob = () => {
    withBob = names.map(name => name+'withBob');
}


byeOlivia();
hiMason();
Pavel();
removeName('Pavel');
joinBob();

names.sort();
names.reverse();
withBob.sort();
withBob.reverse();

console.log(names);
console.log(withBob);