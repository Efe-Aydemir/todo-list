<template>
  <div v-for="(item, index) in todoList" :key="index">
    <y-card class="mt-5 mb-5 !w-20 !h-auto">
      <div class="flex justify-between gap-1 flex-wrap p-3">
        <p>{{  item  }}</p>
        <y-button @click="deleteItem(index)" tertiary>🗑️</y-button>
      </div>
    </y-card>
  </div>
</template>


<script setup>
import { defineProps, onMounted, ref, watch} from 'vue';

const props = defineProps({
  todos: Array
})

const todoList = ref(props.todos)

function deleteItem(index) {
  todoList.value.splice(index,1)
}


watch(props, (newTodos) => {
  console.log(newTodos.todos)
  todoList.value = newTodos.todos
})


onMounted(() => console.log(props.todos))
</script>