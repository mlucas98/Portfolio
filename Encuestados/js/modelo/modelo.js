/*
 * Modelo
 */
var Modelo = function() {
  if(JSON.parse(localStorage.getItem("preguntas")) == null){
    console.log('Hola');
     localStorage.setItem("preguntas", "[]")
    };
  this.preguntas = JSON.parse(localStorage.getItem("preguntas"));
  this.ultimoId = 0;

  //eventos que se autodenominan emisores
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.sumarVoto = new Evento(this);
  this.preguntaEditada = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    //recorrer la lista de preguntas del modelo
    let idAlto = 0;
    for (let i = 0; i < this.preguntas.length; i++) { 
      if(this.preguntas[i].id > idAlto){
        idAlto = this.preguntas[i].id;
      }
    }
    return idAlto;
    },

  //se agrega una pregunta dado un nombre y sus respuestas -- respuestas es un array de objetos
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },
  //Encontrar el índice recorriendo el arreglo porque si se borra alguna pregunta con un id entre el mas bajo y el mas alto, produce errores
  eliminarPregunta: function(id){
    let indice;
    console.log("entro al modelo "+ indice);
    this.preguntas.forEach(pregunta => {
      if(pregunta.id === id){
        indice = this.preguntas.indexOf(pregunta);
      }
    });
    this.preguntas.splice(indice, 1);
    this.preguntaEliminada.notificar();
  },

  eliminarTodo: function(){
    this.preguntas = [];
    this.preguntaEliminada.notificar();
  },

  agregarVoto: function(nombrePregunta, respuesta){
    let pregunta = this.preguntas.find(pregunta=> pregunta.textoPregunta == nombrePregunta);   //manera alternativa de encontrar una pregunta por id
      for(let j = 0; j < pregunta.cantidadPorRespuesta.length; j++){
        if(pregunta.cantidadPorRespuesta[j].textoRespuesta == respuesta){
          pregunta.cantidadPorRespuesta[j].cantidad++;
        }
    }
    this.sumarVoto.notificar();
  },

  editarPregunta: function(id){
    let pregunta = this.preguntas.find(pregunta => pregunta.id == id);
    let nuevoValor = "";
    if(pregunta){
      nuevoValor = prompt("Editar:");
    }
    else{
      alert("Por favor seleccione una pregunta a editar");
    }
    if(nuevoValor == ""){
      alert("No puede dejar un campo vacío");
      return
    }
    pregunta.textoPregunta = nuevoValor;
    this.preguntaEditada.notificar();
  },

  guardar: function(){
    //guardar en localStorage
    let preguntas = JSON.stringify(this.preguntas);
    localStorage.setItem("preguntas", preguntas);
    return 
  },

};
