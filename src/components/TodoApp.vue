<template>
  <input data-test="newTodo" v-model="newTodo" />
  <button data-test="addTodo" @click="addTodo">addTodo</button>
  <ul class="todo-list">
    <li v-for="todo in todoList">{{ todo.text }}</li>
  </ul>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
interface Todo {
  text: string;
}
const newTodo = ref("");
const todoList = reactive<Array<Todo>>([]);
const addTodo = () => {
  todoList.push({ text: newTodo.value });
  newTodo.value = "";
};
</script>
