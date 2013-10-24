App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  // Index Route
});

App.ApplicationController = Ember.Controller.extend({
  init: function(){
    this.set('response', localStorage.appName);
  },
  saveName: function(value) {
    localStorage.appName = value;
  }
});
