let carros = ["palio 98", "toro", "uno"];  // o que há dentro do array [] é chamado index e para separá-lo é utilizado virgula, e pode haver vários tipos de itens dentro do array (index, valor, bolano, function, etc), e a posição começa do 0 ao invés do 1.

// console.log(carros.length); //length conta as posições dos valores

carros.forEach(function(value, index){

    console.log(value,index);

});