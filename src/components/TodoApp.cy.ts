import { mount } from "@cypress/vue";
import TodoApp from "./TodoApp.vue";
describe("TodoApp", () => {
  it("render TodoApp", () => {
    mount(TodoApp);
    const text = "play";
    cy.get('[data-test="newTodo"]').type(text);
    cy.get('[data-test="addTodo"]').click();
    cy.get(".todo-list li")
      .should("have.length", 1)
      .last()
      .should("have.text", text);
  });
});