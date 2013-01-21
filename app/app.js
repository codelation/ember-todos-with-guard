/**
  The Todos Ember application.

  @class Todos
*/
var Todos = Ember.Application.create();

/**
  The data store used by the Ember application.

  @class Todos.Store
*/
Todos.Store = DS.Store.extend({
  revision: 11,
  /**
    The data adapter used to store Todo items.
    A localStorage adapter is used for this app.

    @property adapter
    @type DS.LSAdapter
  */
  adapter: DS.LSAdapter.create({
    namespace: 'todos-emberjs'
  })
});