//Filtre e retorne todos os números pares de um array.

const array =[1,2,3,4,5];

function callback(item){
return item % 2 === 0;
}

function ApenasPares(arr){
    return arr.filter(callback);
}



console.log(ApenasPares(array));


