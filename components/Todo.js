class Todo {
  constructor(data, selector) {
    console.log(data);
    console.log(selector);
  }

  getView() {
    const todoElement = todoTemplate.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");
  }
}

export default Todo;
