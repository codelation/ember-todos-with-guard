(function() {
  /**
    View for displaying a single item in a list with 
    the ability to edit the title, mark as competed, 
    and delete the item.

    @class Todos.TodoItemView
  */
  Todos.TodoItemView = Ember.View.extend({
    tagName: 'li',
    classNames: ['view'],
    classNameBindings: ['todo.isCompleted:completed', 'isEditing:editing'],

    doubleClick: function(event) {
      this.set('isEditing', true);
    }
  });
  
})();