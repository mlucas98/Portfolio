class Calculadora { //crear clase
    valorIngresado = "";
    valorGuardado = "";
    operacion = "";
    presOperador = function (op){
        let resultado2 = "";    //si el operador funciona como disparador de calcular, devuelve el resultado al final
        if(this.valorGuardado && this.valorIngresado){
            resultado2 = this.calcular();            
        }
        this.operacion = op; //guarda la operacion en this.operacion
        this.valorGuardado = this.valorIngresado;
        this.valorIngresado = "";   //reinicia valor ingresado para futuras operaciones
        return resultado2;
    }
    calcular = function (){ // cuando presione el igual, usa los strings del html
        let guardadoParcial = parseInt(this.valorGuardado); //como son string, los parsea para hacer cuentas
        let ingresadoParcial = parseInt(this.valorIngresado);
        this.valorIngresado = this.valorGuardado;
        switch (this.operacion){    //switch que evalua que operador
            case "plus":
                this.operacion = "";
                //return (this.valorGuardado+this.valorIngresado);
                this.valorGuardado = guardadoParcial+ingresadoParcial;
                this.valorIngresado = this.valorGuardado;
                this.valorGuardado = this.valorGuardado.toFixed(2);
                return (this.valorGuardado);
            case "minus":
                this.operacion = "";
                //return (this.valorGuardado-this.valorIngresado);
                this.valorGuardado = guardadoParcial-ingresadoParcial;
                this.valorIngresado = this.valorGuardado;
                this.valorGuardado = this.valorGuardado.toFixed(2);
                return (this.valorGuardado);
            case "divided by":
                this.operacion = "";
                //return (this.valorGuardado/this.valorIngresado);
                this.valorGuardado = guardadoParcial/ingresadoParcial;
                this.valorIngresado = this.valorGuardado;
                this.valorGuardado = this.valorGuardado.toFixed(2);
                return (this.valorGuardado);
            case "times":
                this.operacion = "";
                //return (this.valorGuardado*this.valorIngresado);
                this.valorGuardado = guardadoParcial*ingresadoParcial;
                this.valorIngresado = this.valorGuardado;
                this.valorGuardado = this.valorGuardado.toFixed(2);
                return (this.valorGuardado);
        }
    }
    ingresar = function(valor){ //cada vez que se presione una tecla
        let vToString = valor.toString()
        this.valorIngresado += vToString;
        
    }
    clear = function(){
        console.log("entro funcion");
        this.valorGuardado = "";
        this.valorIngresado = "";
        this.operacion = "";
    }
}

var Calculator = new Calculadora(); //crear instancia de clase

$(document).ready(function(){
    $('.num').click(function(){ //cada numero
        Calculator.ingresar($(this).data('num'));
        $('.viewer').html(Calculator.valorIngresado);
        console.log("toca");
    });

    $('.ops').click(function(){ //cada operacion
        let resultado = Calculator.presOperador($(this).data('ops'));
        if(resultado){  //si resultado no esta vacio (viene de presOperador), muestra el acumulado de valorGuardado
            $('.viewer').html(resultado);            
        }
        else {           
          $('.viewer').html("");
        }
    });
    $('#equals').click(function(){
        let resultado = Calculator.calcular();
        $('.viewer').html(resultado);
    });
    $('#clear').click(function(){
        console.log("entro click");
        Calculator.clear();
        $('.viewer').html("0");
    });

});



var calculadoraTesting = new Calculadora();

const testearSuma =  function (){       //simular TODO
    calculadoraTesting.ingresar("1");
    calculadoraTesting.ingresar("5");
    calculadoraTesting.presOperador("plus");
    calculadoraTesting.ingresar("2");
    calculadoraTesting.ingresar("0");
    let resultado = calculadoraTesting.calcular();
    return resultado == 35;
}

const testearResta = function (){
    calculadoraTesting.valorGuardado = "";
    calculadoraTesting.valorIngresado = "";
    calculadoraTesting.ingresar("5");
    calculadoraTesting.ingresar("0");
    calculadoraTesting.presOperador("minus");
    calculadoraTesting.ingresar("-30");
    let resultado = calculadoraTesting.calcular();
    console.log(resultado);
    return resultado == 80;
    
}

const testearDivision = function(){
    calculadoraTesting.valorGuardado = "";
    calculadoraTesting.valorIngresado = "";
    calculadoraTesting.ingresar("10");
    calculadoraTesting.presOperador("divided by");
    calculadoraTesting.ingresar("3");
    let resultado = calculadoraTesting.calcular();
    console.log(resultado);
    return resultado == 3.33;
}

const testear = function (){
    console.log(testearSuma())
    console.log(testearResta())
    console.log(testearDivision())/*
    console.log(testearSuma())
    console.log(testearSuma())*/
}