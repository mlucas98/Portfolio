var arrayDeProyectos = [];
var arrayDeEjercicios = [];

function agregarElemento(arreglo) {
    for (let i = arreglo.length - 1; i >= 0; i--) {
        let projectObject = arreglo[i];
        let proyectos = $("#proyectos");
        let divFondo = $('<div></div>');
        $(divFondo).addClass(['p-1', 'col-md-4', 'fondoP'])
        let imagen = $('<img>');
        $(imagen).attr('src', 'img/proyectos/' + projectObject.name + '.jpg');
        $(imagen).addClass(['d-block', 'w-100']);
        let divContenido = $('<div></div>');
        $(divContenido).addClass(['overlay', 'd-flex', 'justify-content-center']);
        let h4 = $("<h4 ></h4>");
        $(h4).addClass(['align-self-center', ]);
        let ahref = $('<a></a>');
        $(ahref).html(projectObject.name);
        $(ahref).attr('id', projectObject.name);

        h4.append(ahref);
        divContenido.append(h4);
        divFondo.append(imagen);
        divFondo.append(divContenido);
        proyectos.append(divFondo);
    }
}

arrayDeProyectos.push({ 'name': 'Pixel-Art', 'url': '#', 'description': 'Descripción del proyecto Pixel-Art' });
arrayDeProyectos.push({ 'name': 'Rompecabezas', 'url': '#', 'description': 'Descripción del proyecto Rompecabezas' });
arrayDeProyectos.push({ 'name': 'Testing', 'url': '#', 'description': 'Descripción del proyecto de Testing' });
arrayDeProyectos.push({ 'name': 'Encuestados', 'url': '#', 'description': 'El proyecto consiste en un programa de preguntas y respuestas aplicando el patrón MVC. Posee la vista tanto de Administrador como la de Usuario.' })
arrayDeProyectos.push({ 'name': 'Que Veo Hoy', 'url': '#', 'description': 'Aplicación que recomienda qué película ver basandose en distintos filtros.' })
arrayDeProyectos.push({ 'name': 'Peli vs Peli', 'url': '#', 'description': 'Aplicación que permite crear competencias entre películas de una base de datos local.' })
arrayDeProyectos.push({ 'name': 'Dandelion', 'url': '#', 'description': 'Desarrollo de la web institucional de la escuela de comedia musical Dandelion.' })


agregarElemento(arrayDeProyectos);