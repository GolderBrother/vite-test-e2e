import { mount } from "@vue/test-utils";
import TodoApp from "./TodoApp.vue";

test("render todoApp", () => {
  const wrapper = mount(TodoApp);
  const addTodo = wrapper.get('[data-test="addTodo"]');
  expect(addTodo.text()).toBe("addTodo");
});
