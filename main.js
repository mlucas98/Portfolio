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
        // ahref.href=name+"/index.html";
        ahref.textContent=name;
        ahref.id = name;

        //crear modal//

        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.id = 'modal'+name;
        $(modal).html(
            `<div class="modal-content" id=${name}>
            <span class="close">&times;</span>
                <h1>${name}</h1>
                <p class="parrafo-modal">  </p>
                <button><a href="${name}/index.html">Ir</a></button>
            </div>
            `
        );
        console.log(modal);
        
        // Get the button that opens the modal
        var btn = $(ahref);
        
        // Get the <span> element that closes the modal
        var close = $(modal).find(".close");
        
        // When the user clicks on the button, open the modal
        $(btn).click(function(){
            console.log(modal);
            $(modal).fadeToggle(1400);
        });
        
        // When the user clicks on <span> (x), close the modal
        close.click(function() {
            $(modal).fadeToggle(1400);
        });
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function() {
          if (modal.style.display != none) {
            modal.style.display = "none";
          }
        } 


        
        h3.appendChild(ahref);
        div.appendChild(h3);
        div.appendChild(modal);
        //contenedor.appendChild(divFondo);
        // console.log(arreglo == arrayDeProyectos);
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



let descripcion = $('#modalRompecabezas').find('.parrafo-modal');
console.log(descripcion);
$(descripcion).html(
     "Descripción del proyecto Rompecabezas"
 );

descripcion = $('#modalPixel-Art').find('.parrafo-modal');
$(descripcion).html(
     "Descripción del proyecto Pixel-Art"
 );

 descripcion = $('#modalCalculadora').find('.parrafo-modal');
$(descripcion).html(
     "Descripción del proyecto Calculadora"
 );
