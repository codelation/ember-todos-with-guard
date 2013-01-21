(function() {
  /**
    Controller for managing and filtering Todo items.

    @class Todos.TodosController
  */  
  Todos.TodosController = Ember.ArrayController.extend({
    /**
      Returns `true` when all items are completed.
    
      @property allAreCompleted
      @type Boolean
    */
		allAreCompleted: function(key, value) {
      if (!Ember.isNone(value)) {
        this.setEach('isCompleted', value);
        return value;
      } else {
        return !!this.get('length') && this.everyProperty('isCompleted', true);
      }
    }.property('@each.isCompleted'),
    
    /**
      Returns the number of completed items.
    
      @property completedCount
      @type Integer
    */
    completedCount: function() {
      return this.filterProperty('isCompleted', true).get('length');
    }.property('@each.isCompleted'),
    
    /**
      Saves any changes to items.
    
      @method commit 
    */
    commit: function() {
      this.get('store').commit();
    },

    /**
      Whether or not there are any items loaded.
    
      @property contentIsEmpty
      @type Boolean
    */
		contentIsEmpty: function() {
			return this.get('length') === 0;
		}.property('length'),
    
    /**
      Create a new item with a title.
    
      @method createTodoWithTitle
      @param {String} title
    */
    createTodoWithTitle: function(title) {
      if (!title.trim()) { return; }
      
      Todos.Todo.createRecord({
        title: title
      });
      this.commit();
    },
    
    /**
      Delete an item.
    
      @method deleteTodo
      @param {Todos.Todo} todo
    */
    deleteTodo: function(todo) {
      if (!Ember.isNone(todo)) {
        todo.deleteRecord();
        this.commit();
      }
    },
    
    /**
      Returns `true` if there are any completed items.
    
      @property hasCompleted 
      @type Boolean
    */
    hasCompleted: function() {
      return this.get('completedCount') > 0;
    }.property('completedCount'),
    
    
    /**
      Delete all completed items.
    
      @method clearCompleted 
    */
    clearCompleted: function() {
      var completed = this.filterProperty('isCompleted', true);
      completed.forEach(this.deleteTodo, this);
    },
    
    /**
      Set to `active` or `completed` to filter items.
      Setting to `null` will show all items.
    
      @property contentFilter 
      @type String
      @default null
    */
    contentFilter: null,
    
    /**
      Returns the items that match the current filter.
    
      @property filteredContent 
      @type Ember.Enumerable
    */
    filteredContent: function() {
      switch(this.get('contentFilter')) {
      case 'active':
        return this.filterProperty('isCompleted', false);
      case 'completed':
        return this.filterProperty('isCompleted', true);
      default:
        return this.filter(function() { return true; }); // Checkboxes aren't checked if returning this.get('content')?
      }
    }.property('@each.isCompleted', 'contentFilter'),
    
    /**
      Returns the number of items yet to be completed.
    
      @property remainingCount 
      @type Integer
    */
    remainingCount: function() {
      return this.filterProperty('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    /**
      Returns the number of items with the appropriate text label.
    
      @property remainingFormatted 
      @type String
    */
    remainingFormatted: function() {
      var remaining = this.get('remainingCount');
      var plural = remaining === 1 ? 'item' : 'items';
      return '<strong>%@</strong> %@ left'.fmt(remaining, plural);
    }.property('remainingCount')
  });

})();