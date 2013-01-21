describe("Todos.Todo", function() {
  
  it("should be defined", function() {
    expect(Todos.Todo).toBeDefined();
  });
  
  it("should be active (not completed) by default", function() {
    var todo = Todos.Todo.createRecord();
    expect(todo.get('isCompleted')).toBe(false);
  });
  
});