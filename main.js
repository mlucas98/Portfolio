var arrayDeProyectos = [];
var arrayDeEjercicios = [];

function agregarElemento(arreglo){
    for(let i=arreglo.length-1; i>=0;i--){
        let name = arreglo[i];
        console.log(i);
        console.log(name);
        let divPro = document.getElementById("proyectos");
        let divEje = document.getElementById("ejercicios");
        let divFondo= document.createElement('div');
        divFondo.style.backgroundImage =  'url("'+name+'/'+name+'.jpg")';
        let div = document.createElement('div');
        if (arreglo == arrayDeProyectos){
            div.className= "proyecto";
            divFondo.className = "fondoP";
        } else {
            div.className= "ejercicio";
            divFondo.className = "fondoE";
        }
        div.style.backgroundColor= 'rgba(240, 240, 240, 0.6)';
        let h3= document.createElement("h3");
        let ahref = document.createElement('a');
        ahref.href=name+"/index.html";
        ahref.textContent=name;
        
        h3.appendChild(ahref);
        div.appendChild(h3);
        //contenedor.appendChild(divFondo);
        console.log(arreglo == arrayDeProyectos);
        if (arreglo == arrayDeProyectos){
            console.log("hola")
            divPro.appendChild(divFondo);
        }
        else {
            console.log("hola2")
            divEje.appendChild(divFondo);
        }
        divFondo.appendChild(div);
    }
}

arrayDeProyectos.push('Pixel-Art');
arrayDeProyectos.push('Rompecabezas');

arrayDeEjercicios.push('Calculadora')

agregarElemento(arrayDeProyectos);
agregarElemento(arrayDeEjercicios);
