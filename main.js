var arrayDeProyectos = [];

function agregarElemento(arreglo){
    for(let i=arreglo.length-1; i>=0;i--){
        let name = arreglo[i];
        console.log(i);
        console.log(name);
        let contenedor = document.getElementById("contenedor");
        let divFondo= document.createElement('div');
        divFondo.style.backgroundImage =  'url("'+name+'/'+name+'.jpg")';
        divFondo.className = "fondo";
        let div = document.createElement('div');
        div.className= "proyecto";
        div.style.backgroundColor= 'rgba(240, 240, 240, 0.6)';
        let h2= document.createElement("h2");
        let ahref = document.createElement('a');
        ahref.href=name+"/index.html";
        ahref.textContent=name;

        h2.appendChild(ahref);
        div.appendChild(h2);
        contenedor.appendChild(divFondo);
        divFondo.appendChild(div);
    }
}

arrayDeProyectos.push('Rompecabezas');
arrayDeProyectos.push('Prueba');

// agregarElemento(arrayDeProyectos);

