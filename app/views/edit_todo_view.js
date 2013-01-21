(function() {
  /**
    Text field for editing an existing Todo item.

    @class Todos.EditTodoView
  */
  Todos.EditTodoView = Ember.TextField.extend({
    classNames: ['edit'],

    valueBinding: 'todo.title',

    change: function() {
      var value = this.get('value');

      if (Ember.isEmpty(value)) {
        var controller = this.get('controller');
        var todo = this.get('content');

        controller.deleteTodo(todo);
      }
    },

    focusOut: function() {
      this.set('parentView.isEditing', false);
    },

    insertNewline: function() {
      this.set('parentView.isEditing', false);
    },

    didInsertElement: function() {
      this.$().focus();
    }
  });
  
})();
