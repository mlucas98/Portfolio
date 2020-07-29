var arrayDeProyectos = [];
var arrayDeEjercicios = [];

function agregarElemento(arreglo) {
    for (let i = arreglo.length - 1; i >= 0; i--) {
        let projectObject = arreglo[i];
        let proyectos = $("#proyectos");
        let divFondo = $('<div></div>');
        $(divFondo).addClass(['col-md-4', 'fondoP']);
        $(divFondo).css('background-image', 'url("img/proyectos/' + projectObject.name + '.jpg")');
        let h4 = $("<h4></h4>");
        let ahref = $('<a></a>');
        $(ahref).html(projectObject.name);
        $(ahref).attr('id', projectObject.name);

        h4.append(ahref);
        divFondo.append(h4);
        proyectos.append(divFondo);
    }
}

arrayDeProyectos.push({ 'name': 'Pixel-Art', 'url': '#', 'description': 'Descripción del proyecto Pixel-Art' });
arrayDeProyectos.push({ 'name': 'Rompecabezas', 'url': '#', 'description': 'Descripción del proyecto Rompecabezas' });
arrayDeProyectos.push({ 'name': 'Testing', 'url': '#', 'description': 'Descripción del proyecto de Testing' });
arrayDeProyectos.push({ 'name': 'Encuestados', 'url': '#', 'description': 'El proyecto consiste en un programa de preguntas y respuestas aplicando el patrón MVC. Posee la vista tanto de Administrador como la de Usuario.' })


agregarElemento(arrayDeProyectos);