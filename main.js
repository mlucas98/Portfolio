function agregarElemento(name){
    let contenedor = document.getElementById("contenedor");
    let div = document.createElement('div');
    div.className= "proyecto";
    div.style.backgroundImage= 'url('+name+'.jpg)';
    let h2= document.createElement("h2");
    let ahref = document.createElement('a');
    ahref.href=name+"/index.html";
    ahref.textContent=name;

    h2.appendChild(ahref);
    div.appendChild(h2);
    contenedor.appendChild(div);

}