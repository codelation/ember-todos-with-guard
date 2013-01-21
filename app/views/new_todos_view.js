(function() {
  /**
    Text field for entering a new Todo item.

    @class Todos.NewTodoView
  */
  Todos.NewTodoView = Ember.TextField.extend({
    elementId: 'new-todo',
    placeholder: 'What needs to be done?',
    insertNewline: function() {
      this._super();
      this.$().val('');
      // Ember.TextField bug?
      // this.set('value', '');
    }
  });
})();