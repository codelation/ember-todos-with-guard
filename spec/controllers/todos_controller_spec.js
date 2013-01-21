describe("Todos.TodosController", function() {
  
  it("should be defined", function() {
    expect(Todos.TodosController).toBeDefined();
  });
  
  var todosController, todosArray;
  beforeEach(function() {
    todosController = Todos.TodosController.create(),
    todosArray = [
      Ember.Object.create({ isCompleted: true }),
      Ember.Object.create({ isCompleted: true }), 
      Ember.Object.create({ isCompleted: false })
    ];
    todosController.set('content', todosArray);
  });
  
  it("should return all Todos when the content filter is set to `null`", function() {
    todosController.set('contentFilter', null);
    expect(todosController.get('filteredContent').get('length')).toBe(3);
  });
  
  it("should return only completed Todos when the content filter is set to `completed`", function() {
    todosController.set('contentFilter', 'completed');
    expect(todosController.get('filteredContent').get('length')).toBe(2);
  });
  
  it("should return only active Todos when the content filter is set to `active`", function() {
    todosController.set('contentFilter', 'active');
    expect(todosController.get('filteredContent').get('length')).toBe(1);
  });
  
  it("should return the number of Todos remaining", function() {
    expect(todosController.get('remainingCount')).toBe(1);
  });
  
  it("should format the Todos remaining properly", function() {
    expect(todosController.get('remainingFormatted')).toBe('<strong>1</strong> item left');
    todosController.pushObject(Ember.Object.create({ isCompleted: false }));
    expect(todosController.get('remainingFormatted')).toBe('<strong>2</strong> items left');
  });
  
  it("should know if there are any completed Todos", function() {
    expect(todosController.get('hasCompleted')).toBe(true);
    todosController.setEach('isCompleted', false);
    expect(todosController.get('hasCompleted')).toBe(false);
  });
  
  it("should know if there are no Todos", function() {
    expect(todosController.get('contentIsEmpty')).toBe(false);
    todosController.set('content', []);
    expect(todosController.get('contentIsEmpty')).toBe(true);
  });
  
  it("should return the number of completed Todos", function() {
    expect(todosController.get('contentIsEmpty')).toBe(false);
    todosController.set('content', []);
    expect(todosController.get('contentIsEmpty')).toBe(true);
  });
  
  it("should know if all Todos are completed", function() {
    expect(todosController.get('allAreCompleted')).toBe(false);
    todosController.setEach('isCompleted', true);
    expect(todosController.get('allAreCompleted')).toBe(true);
  });
  
  it("should be able to set all Todos as completed", function() {
    todosController.set('allAreCompleted', true);
    expect(todosController.get('allAreCompleted')).toBe(true);
  });
  
});
