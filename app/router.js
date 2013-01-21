(function() {
  
  Todos.Router.map(function(match) {
    this.resource('todos', function() {
      this.route('active');
      this.route('completed');
    });
  });
  
  Todos.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('todos');
    }
  });
  
  Todos.TodosRoute = Ember.Route.extend({
    model: function() {
      return Todos.Todo.find();
    }
  });

  Todos.TodosIndexRoute = Ember.Route.extend({
    setupController: function() {
      this.controllerFor('todos').set('contentFilter', null);
    }
  });

  Todos.TodosActiveRoute = Ember.Route.extend({
    setupController: function() {
      this.controllerFor('todos').set('contentFilter', 'active');
    }
  });

  Todos.TodosCompletedRoute = Ember.Route.extend({
    setupController: function() {
      this.controllerFor('todos').set('contentFilter', 'completed');
    }
  });
  
})();