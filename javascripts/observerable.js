function Observerable () {}

Observerable.prototype.addObserver = function (event, observer, context) {
  this.observers = this.observers || [];
  this.observers.push({event: event, block: observer, context: context || null});
};

Observerable.prototype.notifyObservers = function (event) {
  for (var i = 0; i < (this.observers || []).length; i++) {
    var observer = this.observers[i];
    if (observer.event === event) {
      shift = [].shift;
      shift.apply(arguments); // "delete" the first argument that contains the events name, because we don't need it when we call the observer function
      observer.block.apply(observer.context, arguments);
    }
  }
};

Observerable.mixin = function (target) {
  Object.keys(Observerable.prototype).forEach(function (property) {
    target[property] = Observerable.prototype[property];
  });
};