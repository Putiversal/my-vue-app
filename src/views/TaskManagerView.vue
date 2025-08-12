<template>
  <v-container>
    <v-col>
      <v-card
        elevation="3"
        class="d-flex flex-column"
        style="margin-bottom: 20px"
      >
        <v-card-text>
          <p>
            Я хочу сделать список задач которые я буду делать в рамках этого
            проекта. Так, первой задачей будет менеджер тасок. Доступ к нему
            можно будет получить на панели слева.
          </p>
          <ul>
            <li>Создать компонент менеджера задач</li>
            <li>Добавить возможность добавлять новые задачи</li>
            <li>Реализовать удаление задач</li>
            <li>Добавить возможность отмечать задачи как выполненные</li>
            <li>Сохранение задач в localStorage</li>
            <li>Сделать красивый интерфейс для списка задач</li>
            <li>Добавить фильтрацию задач (все/выполненные/активные)</li>
          </ul>
        </v-card-text>
      </v-card>
      <v-card elevation="3">
        <v-card-text>
          <v-row>
            <v-text-field
              placeholder="Новая тудушка"
              v-model="newTodo"
              hide-details="auto"
              label="Название задачи"
              :rules="rules"
            >
              <template v-slot:append>
                <v-btn @click="addTodo">Add Todo</v-btn>
              </template>
            </v-text-field>
          </v-row>

          <v-row>
            <ul>
              <li v-for="todo in filteredTodos" :key="todo.id">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
                <v-btn class="smallBtn" @click="removeTodo(todo)">X</v-btn>
              </li>
            </ul>
          </v-row>

          <v-card-actions class="d-flex justify-center">
            <v-btn @click="hideCompleted = !hideCompleted" elevation="3">
              {{ hideCompleted ? "Show all" : "Hide completed" }}
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<style scoped lang="scss">
.done {
  text-decoration: line-through;
}
.smallBtn {
  height: 18px !important;
  width: 14px !important;
}
</style>
