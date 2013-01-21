(function() {
  var attr = DS.attr;
  /**
    A Todo item with a title and completion state.

    @class Todos.Todo
  */
  Todos.Todo = DS.Model.extend({
    /**
      The item's unique identifier.
    
      @property id
      @type String
    */
    // id: null,
    
    /**
      The item's description.
    
      @property title
      @type String
    */
    title: attr('string'),
    
    /**
      Returns `true` if the item has been marked as completed.
    
      @property isCompleted
      @type Boolean
      @default false
    */
    isCompleted: attr('boolean', { defaultValue: false }),
    
    /**
      Observer that saves the item when `isCompleted` or `title` changes.
    
      @method contentDidChange
    */
    contentDidChange: function() {
      Ember.run.once(this, function() {
        this.get('store').commit();
      });
    }.observes('isCompleted', 'title')
	});

})();