// jeito antigo de se realizar a orientação a objeto ->
/* let celular = function(){

    this.cor = "prata";   // . = tenho um objeto e estou acessando algo dentro dele
    this.ligar = function()
    {
        console.log("uma ligação");
        return "ligando";
    }
}

let objeto = new celular();

console.log(objeto.cor());
console.log(objeto.ligar()); */


// modo mais atualizando de se realizar a orientação a objetos ->

/* class celular {

    constructor(){

        this.cor = "prata";

    }

    ligar(){

        console.log("uma ligação");
        return "ligando";
    }
}

let objeto = new celular();

console.log(objeto); */