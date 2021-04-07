var arrayDeProyectos = [];
var arrayDeEjercicios = [];

function agregarElemento(arreglo) {
    for (let i = arreglo.length - 1; i >= 0; i--) {
        let projectObject = arreglo[i];
        let proyectos = $("#proyectos");
        let divFondo = $('<div></div>');
        $(divFondo).addClass(['p-1', 'col-md-4', 'fondoP'])
        let ahref = $('<a></a>');
        $(ahref).attr({ id: projectObject.name, href: projectObject.url, target: '_blank' });
        // $(ahref).attr({ id: projectObject.name, hrEsabyBank Landing: projectObject.url, target: '_blank' });
        let imagen = $('<img>');
        $(imagen).attr('src', 'img/proyectos/' + projectObject.name + '.jpg');
        $(imagen).addClass(['d-block', 'w-100']);
        let divContenido = $('<div></div>');
        $(divContenido).addClass(['overlay', 'd-flex', 'justify-content-center']);
        let h4 = $("<h4 ></h4>");
        $(h4).addClass(['align-self-center']);
        $(h4).html(projectObject.name);

        // h4.append(ahref);
        divContenido.append(h4);
        divFondo.append(imagen);
        ahref.append(divContenido);
        divFondo.append(ahref);
        proyectos.append(divFondo);
    }
}

arrayDeProyectos.push({ 'name': 'Pixel-Art', 'url': 'https://github.com/mlucas98/pixel-art', 'description': 'Descripción del proyecto Pixel-Art' });
arrayDeProyectos.push({ 'name': 'Rompecabezas', 'url': 'https://github.com/mlucas98/rompecabezas', 'description': 'Descripción del proyecto Rompecabezas' });
arrayDeProyectos.push({ 'name': 'Testing', 'url': 'https://github.com/mlucas98/reservando', 'description': 'Descripción del proyecto de Testing' });
arrayDeProyectos.push({ 'name': 'Encuestados', 'url': '#', 'description': 'El proyecto consiste en un programa de preguntas y respuestas aplicando el patrón MVC. Posee la vista tanto de Administrador como la de Usuario.' })
arrayDeProyectos.push({ 'name': 'Que Veo Hoy', 'url': 'https://github.com/mlucas98/que-veo-hoy', 'description': 'Aplicación que recomienda qué película ver basandose en distintos filtros.' });
arrayDeProyectos.push({ 'name': 'Peli vs Peli', 'url': 'https://github.com/mlucas98/peli-vs-peli', 'description': 'Aplicación que permite crear competencias entre películas de una base de datos local.' });
arrayDeProyectos.push({ 'name': 'Dandelion', 'url': 'https://www.dandelionarte.com.ar/', 'description': 'Desarrollo de la web institucional de la escuela de comedia musical Dandelion.' });
arrayDeProyectos.push({ 'name': 'EasyBank Landing', 'url': 'https://mlucas98.github.io/easyBank-landing/', 'description': 'Landing page para un banco ficticio. Hecho con scss, html y js' });

https: //github.com/mlucas98/que-veo-hoy
    agregarElemento(arrayDeProyectos);