let nombres = ['camila', 'jhon Ax', 'Miguel', 'jhon Al', 'cesar',];

console.log(nombres.slice(-5, -4));

//slice: extrae , excluye cundo tenemos es negativos







const lista5 = ['Uno', 'Dos', 'Tres','Cuatro'];

console.log(lista5);
console.log(lista5.reverse());

//reverse: invierte primero-ultimo








const array1 = [1, 2, 3, 4, 5, 6];

let reduces = (inicio, siguiente) => (inicio%2)? inicio+siguiente : siguiente;

console.log(array1.reduce(reduces));

//reduce:sumar de uno en uno segun el indice y su valor








var myFamily = ['maria', 'cesar A', 'maicol', 'cesar M'];

let res = myFamily.shift();

console.log(myFamily);
console.log(res);

// shift: elimina el primer dato








const fruit = ['banana', 'manzana', 'pera', 'fresa', 'durazno'];

let res_u = fruit.pop();

console.log(fruit);

console.log(res_u);

//pop: elimina el ultimo dato







let lista3 = [];

lista3.unshift("Cesar");
lista3.unshift("Navas");
let res_a = lista3.unshift("Calderon");
console.log(lista3);
console.log(res_a);

//unshift: inverso del push ( al principio)







let Modificadores = {
    Push: function(data){

        Array.prototype.push.call(this, data);
    }
};
let lista2 = Object.create(Modificadores);
lista2.length = 0;

lista2.Push("maicol");
console.log(lista2);

//this:buscar datos(sabe al dato)






var lista = [];

let count =  Array.prototype.push.call(lista, "cesar", "navas ;)");

console.log(lista);
console.log(count);

// call: todose //\\ apply: uno por uno
// bind: precarga ( mescal de call-apply)





let array = []

let count_ = array.push(["cesar","alexander"]);

console.log(count_);
console.log(array);

// push = agrega al final
//count = agregamos un indice