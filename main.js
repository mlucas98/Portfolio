var arrayDeProyectos = [];
var arrayDeEjercicios = [];

function agregarElemento(arreglo){
    for(let i=arreglo.length-1; i>=0;i--){
        let projectObject = arreglo[i];
        //console.log(i);
        //console.log(projectObject);
        let divPro = $("#proyectos");
        let divEje = $("#ejercicios");
        let divFondo= $('<div></div>');
        $(divFondo).css('background-image', 'url("'+projectObject.name+'/'+projectObject.name+'.jpg")');
        let div = $('<div></div>');
        if (arreglo == arrayDeProyectos){
            $(div).addClass("proyecto");
            $(divFondo).addClass("fondoP");
        } else {
            $(div).addClass("ejercicio");
            $(divFondo).addClass("fondoE");
        }
        $(div).css('background-color', 'rgba(240, 240, 240, 0.6)');
        let h3= $("<h3></h3>");
        let ahref = $('<a></a>');
        //$(ahref).attr('href', projectObject+"/index.html"); --> el modal tiene que redireccionar, no 'a'
        $(ahref).html(projectObject.name);
        $(ahref).attr('id', projectObject.name);

          /////////////////
         // crear modal //
        /////////////////

        let modal = $('<div></div>');
        $(modal).addClass('modal');
        $(modal).attr('id', 'modal'+projectObject);
        $(modal).html(
            `<div class="modal-content" id=${projectObject.name}>
            <span class="close">&times;</span>
                <h1>${projectObject.name}</h1>
                <p class="parrafo-modal">${projectObject.description}</p>
                <button><a href="${projectObject.url}">Ir</a></button>
            </div>
            `
        );
        
        
        
        // Get the button that opens the modal
        var btn = $(ahref);
        
        // Get the <span> element that closes the modal
        var close = $(modal).find(".close");
        
        // When the user clicks on the button, open the modal
        $(btn).click(function(){
            console.log(modal);
            $(modal).fadeToggle(500);
        });
        
        // When the user clicks on <span> (x), close the modal
        close.click(function() {
            $(modal).fadeToggle(500);
        });
        
        // When the user clicks anywhere outside of the modal, close it
        $(document).click(function(){
            //console.log($(modal).css('display'));
            /*if($(modal).css('display') != 'block'){
                $(modal).toggle(500);
            }*/
        })
        /*
        window.onclick = function() {
          if (modal.style.display != none) {
            modal.style.display = "none";
          }
        } */


        
        h3.append(ahref);
        div.append(h3);
        div.append(modal);
        //contenedor.appendChild(divFondo);
        // console.log(arreglo == arrayDeProyectos);
        if (arreglo == arrayDeProyectos){
            divPro.append(divFondo);
        }
        else {
            divEje.append(divFondo);
        }
        divFondo.append(div);
    }
}

arrayDeProyectos.push({'name' : 'Pixel-Art', 'url' : 'Pixel-Art/index.html', 'description' : 'Descripción del proyecto Pixel-Art'});
arrayDeProyectos.push({'name' : 'Rompecabezas', 'url' : 'Rompecabezas/index.html', 'description' : 'Descripción del proyecto Rompecabezas'});
arrayDeProyectos.push({'name' : 'Testing', 'url' : 'Testing/html/index.html', 'description' : 'Descripción del proyecto de Testing'});

arrayDeEjercicios.push({'name' : 'Calculadora', 'url' : 'Rompecabezas/index.html', 'description' : 'Descripción del proyecto Calculadora'});

agregarElemento(arrayDeProyectos);
agregarElemento(arrayDeEjercicios);
