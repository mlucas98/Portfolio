/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    for (let i=0; i<=respuestas.length; i++){   //validación para evitar preguntas y respuestas vacías
      if((respuestas.length == 0 || pregunta == "")){
        alert("No puede ingresar un campo vacío");
        return;
      }
    }
    this.modelo.agregarPregunta(pregunta, respuestas);
  },
  eliminarPregunta: function(id){
    console.log("entro al controlador "+ id);
    this.modelo.eliminarPregunta(id);
  },
  eliminarTodo: function(){
    this.modelo.eliminarTodo();
  },
  agregarVoto: function(pregunta, respuesta){
    this.modelo.agregarVoto(pregunta, respuesta)
  },
  editarPregunta: function(id){
    this.modelo.editarPregunta(id);
  },
  guardar: function(){
    this.modelo.guardar();
  }
};
