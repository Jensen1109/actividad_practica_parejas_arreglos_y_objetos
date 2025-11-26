
const verduras = ["papa", "cebolla", "cilantro", "tomate"];

verduras.push("espinacas");
// console.log(verduras);
// console.log(`El arreglo tiene ${verduras.length} elementos.`);
verduras.pop();
verduras.unshift("perejil");
// console.log(verduras);
// console.log(`El arreglo tiene ${verduras.length} elementos.`);
verduras.shift();
// console.log(verduras);

console.log("\nEjercicio A:");
console.log(`El arreglo tiene ${verduras.length} elementos.`);

console.log("\nEjercicio B:");
for (let i = 0; i < verduras.length; i++) {
    console.log(`${i}: ${verduras[i]}`);
}

console.log("\nEjercicio B:");
for (let verdura of verduras) {
    console.log(verdura);
}

// Es mas util utilizar for tradicional cuando se requiere el index de cada elemento de la lista.
// Es mas util utilizar for of cuando se requiere unicamente los elementos de la lista