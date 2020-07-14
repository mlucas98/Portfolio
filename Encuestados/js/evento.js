//Evento
//Cuando se declara un evento en el modelo  se autowirea como sujeto
var Evento = function(emisor) {
  this.sujeto = emisor;
  this.observadores = [];
};

//Cuando se llama a la funcion suscribir, las funciones de las vistas se ejecutan
Evento.prototype = {
  suscribir: function(observador) {
    this.observadores.push(observador);
  },
  notificar: function() {
    for (var i = 0; i < this.observadores.length; i++) {
      this.observadores[i](this.sujeto);
    }
  }
};